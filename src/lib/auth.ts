export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  plan: 'free' | 'elite';
}

export interface TradingAccount {
  balance: number;
  equity: number;
  floatingPnL: number;
  margin: number;
  freeMargin: number;
  marginLevel: number;
  tradesCount: number;
  dailyTradesUsed: number;
  lastTradeReset: Date;
}

class AuthService {
  private readonly USERS_KEY = 'nrm_users';
  private readonly CURRENT_USER_KEY = 'nrm_current_user';
  private readonly TRADING_ACCOUNT_KEY = 'nrm_trading_account';

  // Get all users from localStorage
  private getUsers(): Record<string, User & { password: string }> {
    if (typeof window === 'undefined') return {};
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : {};
  }

  // Save users to localStorage
  private saveUsers(users: Record<string, User & { password: string }>): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // Create initial trading account
  private createTradingAccount(): TradingAccount {
    return {
      balance: 100000,
      equity: 100000,
      floatingPnL: 0,
      margin: 0,
      freeMargin: 100000,
      marginLevel: 0,
      tradesCount: 0,
      dailyTradesUsed: 0,
      lastTradeReset: new Date()
    };
  }

  // Register new user
  async signup(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      // Validation
      if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
        return { success: false, error: 'All fields are required' };
      }

      if (userData.password !== userData.confirmPassword) {
        return { success: false, error: 'Passwords do not match' };
      }

      if (userData.password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        return { success: false, error: 'Please enter a valid email address' };
      }

      const users = this.getUsers();

      // Check if user already exists
      if (Object.values(users).some(user => user.email === userData.email)) {
        return { success: false, error: 'An account with this email already exists' };
      }

      // Create new user
      const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newUser: User = {
        id: userId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        createdAt: new Date(),
        plan: 'free'
      };

      // Save user with password
      users[userId] = { ...newUser, password: userData.password };
      this.saveUsers(users);

      // Create trading account
      const tradingAccount = this.createTradingAccount();
      if (typeof window !== 'undefined') {
        localStorage.setItem(`${this.TRADING_ACCOUNT_KEY}_${userId}`, JSON.stringify(tradingAccount));
      }

      // Set as current user
      this.setCurrentUser(newUser);

      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: 'An error occurred during signup' };
    }
  }

  // Login user
  async login(email: string, password: string): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
      }

      const users = this.getUsers();
      const user = Object.values(users).find(u => u.email === email);

      if (!user || user.password !== password) {
        return { success: false, error: 'Invalid email or password' };
      }

      const { password: _, ...userWithoutPassword } = user;
      this.setCurrentUser(userWithoutPassword);

      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: 'An error occurred during login' };
    }
  }

  // Get current user
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const userData = localStorage.getItem(this.CURRENT_USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  // Set current user
  private setCurrentUser(user: User): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  // Logout
  logout(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Get trading account
  getTradingAccount(userId?: string): TradingAccount | null {
    if (typeof window === 'undefined') return null;
    const currentUser = userId || this.getCurrentUser()?.id;
    if (!currentUser) return null;

    const accountData = localStorage.getItem(`${this.TRADING_ACCOUNT_KEY}_${currentUser}`);
    if (!accountData) {
      // Create default account if none exists
      const defaultAccount = this.createTradingAccount();
      this.saveTradingAccount(defaultAccount, currentUser);
      return defaultAccount;
    }

    const account = JSON.parse(accountData);

    // Reset daily trades if it's a new day
    const lastReset = new Date(account.lastTradeReset);
    const now = new Date();
    if (now.toDateString() !== lastReset.toDateString()) {
      account.dailyTradesUsed = 0;
      account.lastTradeReset = now;
      this.saveTradingAccount(account, currentUser);
    }

    return account;
  }

  // Save trading account
  saveTradingAccount(account: TradingAccount, userId?: string): void {
    if (typeof window === 'undefined') return;
    const currentUser = userId || this.getCurrentUser()?.id;
    if (!currentUser) return;

    localStorage.setItem(`${this.TRADING_ACCOUNT_KEY}_${currentUser}`, JSON.stringify(account));
  }

  // Check if user can make trade (for free plan limits)
  canMakeTrade(): { allowed: boolean; message?: string } {
    const user = this.getCurrentUser();
    const account = this.getTradingAccount();

    if (!user || !account) {
      return { allowed: false, message: 'Please log in to continue trading' };
    }

    if (user.plan === 'elite') {
      return { allowed: true };
    }

    // Free plan: 50 trades per day
    if (account.dailyTradesUsed >= 50) {
      return {
        allowed: false,
        message: 'Daily trade limit reached (50/day). Upgrade to Elite for unlimited trading.'
      };
    }

    return { allowed: true };
  }

  // Update trading account after trade
  recordTrade(): void {
    const account = this.getTradingAccount();
    if (!account) return;

    account.dailyTradesUsed += 1;
    account.tradesCount += 1;
    this.saveTradingAccount(account);
  }
}

export const authService = new AuthService();
