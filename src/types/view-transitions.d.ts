// Type declarations for View Transitions API
// https://developer.chrome.com/docs/web-platform/view-transitions/

interface Document {
  startViewTransition?(callback: () => void | Promise<void>): ViewTransition;
}

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface Navigator {
  vibrate?(pattern: number | number[]): boolean;
}
