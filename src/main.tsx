import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './context/authContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ViewportProvider } from './context/viewport.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewportProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ViewportProvider>
  </StrictMode>,
);
