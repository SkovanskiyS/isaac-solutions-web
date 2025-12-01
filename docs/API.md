# API Documentation

This document outlines the API endpoints, data structures, and integration patterns used in the Isaac Solutions Web project.

## 🌐 API Overview

Currently, the Isaac Solutions website is primarily a frontend application with server-side rendering capabilities. The main API interactions involve:

1. **Contact Form Submissions**
2. **Newsletter Subscriptions** (planned)
3. **Authentication APIs** (for dashboard access)
4. **Portfolio Data Management** (planned)

---

## 📧 Contact Form API

### Endpoint: Contact Form Submission

**Purpose**: Handle contact form submissions from the website.

**Current Implementation**: Client-side form validation with planned backend integration.

#### Request Structure

```typescript
interface ContactFormData {
  name: string;           // Required, min 2 characters
  email: string;          // Required, valid email format
  company?: string;       // Optional
  phone?: string;         // Optional
  message: string;        // Required, min 10 characters
  serviceType: 'mvp' | 'web' | 'mobile' | 'consulting' | 'other';
  budget?: 'under-10k' | '10k-25k' | '25k-50k' | '50k-plus';
  timeline?: 'asap' | '1-3-months' | '3-6-months' | '6-plus-months';
  hearAboutUs?: 'google' | 'social' | 'referral' | 'other';
}
```

#### Validation Schema

```typescript
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  email: z.string()
    .email('Please enter a valid email address'),
  
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  
  phone: z.string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional(),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  serviceType: z.enum(['mvp', 'web', 'mobile', 'consulting', 'other']),
  
  budget: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-plus']).optional(),
  
  timeline: z.enum(['asap', '1-3-months', '3-6-months', '6-plus-months']).optional(),
  
  hearAboutUs: z.enum(['google', 'social', 'referral', 'other']).optional(),
});
```

#### Planned API Endpoint

```typescript
// POST /api/contact
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(contactFormData)
}

// Success Response (201)
{
  success: true,
  message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
  inquiryId: "string"
}

// Error Response (400)
{
  success: false,
  message: "Validation failed",
  errors: [
    {
      field: "email",
      message: "Please enter a valid email address"
    }
  ]
}
```

---

## 🔐 Authentication API

### Overview

The authentication system is planned for dashboard access and client project management.

#### User Data Structure

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'admin' | 'developer';
  company?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Authentication Endpoints (Planned)

```typescript
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  user?: User;
  token?: string;
  message: string;
}

// POST /api/auth/register
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  company?: string;
}

// POST /api/auth/logout
// GET /api/auth/me - Get current user
// POST /api/auth/forgot-password
// POST /api/auth/reset-password
```

---

## 📊 Portfolio API

### Data Structures

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: Technology[];
  category: ProjectCategory;
  client?: string;
  projectUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: Date;
  endDate?: Date;
  featured: boolean;
  testimonial?: Testimonial;
}

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'cloud';
  icon?: string;
}

interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating: number;
}
```

#### Portfolio Endpoints (Planned)

```typescript
// GET /api/portfolio
interface GetProjectsResponse {
  projects: Project[];
  categories: ProjectCategory[];
  totalCount: number;
  page: number;
  limit: number;
}

// GET /api/portfolio/[id]
interface GetProjectResponse {
  project: Project;
}

// Query Parameters
interface ProjectsQuery {
  category?: string;
  technology?: string;
  featured?: boolean;
  status?: string;
  page?: number;
  limit?: number;
  search?: string;
}
```

---

## 🌍 Internationalization API

### Translation Management

```typescript
interface Translation {
  key: string;
  locale: string;
  value: string;
  namespace: string;
}

interface Locale {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  enabled: boolean;
}
```

#### Translation Endpoints (Planned)

```typescript
// GET /api/translations/[locale]
interface GetTranslationsResponse {
  locale: string;
  translations: Record<string, any>;
  lastUpdated: Date;
}

// GET /api/locales
interface GetLocalesResponse {
  locales: Locale[];
  defaultLocale: string;
}
```

---

## 📈 Analytics API

### Event Tracking

```typescript
interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  sessionId: string;
  timestamp: Date;
}

// Common Events
type EventType = 
  | 'page_view'
  | 'contact_form_submit'
  | 'portfolio_project_view'
  | 'language_change'
  | 'theme_change'
  | 'download_resume'
  | 'external_link_click';
```

#### Analytics Endpoints (Planned)

```typescript
// POST /api/analytics/track
interface TrackEventRequest {
  event: EventType;
  properties?: Record<string, any>;
}

// GET /api/analytics/dashboard (Admin only)
interface AnalyticsDashboard {
  pageViews: number;
  contactFormSubmissions: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  topReferrers: Array<{
    domain: string;
    visits: number;
  }>;
}
```

---

## 🛠️ Integration Patterns

### Error Handling

```typescript
class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Error Response Format
interface ErrorResponse {
  success: false;
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
}
```

### Request/Response Interceptors

```typescript
// Request interceptor (planned)
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    // Add auth token
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

---

## 🔒 Security Considerations

### API Security

1. **Rate Limiting**: Prevent abuse of contact forms and API endpoints
2. **Input Validation**: Server-side validation for all inputs
3. **CSRF Protection**: Cross-site request forgery protection
4. **CORS Configuration**: Proper cross-origin resource sharing setup
5. **Authentication**: JWT tokens with proper expiration
6. **Data Sanitization**: Clean user inputs before processing

### Security Headers

```typescript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

---

## 📚 Client-Side Data Fetching

### Custom Hooks

```typescript
// useApi hook for data fetching
import { useState, useEffect } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiState<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
```

### React Query Integration (Planned)

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Fetch projects
const useProjects = (filters?: ProjectsQuery) => {
  return useQuery({
    queryKey: ['projects', filters],
    queryFn: () => fetchProjects(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Submit contact form
const useSubmitContact = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
    onSuccess: () => {
      // Handle success
      toast.success('Thank you for your inquiry!');
    },
    onError: (error) => {
      // Handle error
      toast.error('Failed to submit form. Please try again.');
    },
  });
};
```

---

## 🚀 Future API Enhancements

### Planned Features

1. **GraphQL API**: Consider GraphQL for more flexible data fetching
2. **Real-time Updates**: WebSocket integration for live notifications
3. **File Uploads**: API for uploading project images and documents
4. **Advanced Search**: Full-text search across projects and content
5. **API Versioning**: Implement API versioning for backward compatibility
6. **Webhooks**: Integration with third-party services (CRM, email marketing)

### Scalability Considerations

1. **Caching**: Redis for session storage and API response caching
2. **Database Optimization**: Proper indexing and query optimization
3. **CDN Integration**: Static asset delivery optimization
4. **Load Balancing**: Multiple server instances for high availability
5. **Monitoring**: API performance and error monitoring

---

This documentation will be updated as API endpoints are implemented and the backend infrastructure is developed.