"use client";

import type React from 'react';

// This component can be used to wrap your application with any context providers
// (e.g., ThemeProvider, QueryClientProvider, etc.) if needed in the future.
// For now, it's a simple pass-through.

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
