import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import { ResumeModalProvider } from './contexts/ResumeModalContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ResumeModalProvider>
        <App />
      </ResumeModalProvider>
    </ThemeProvider>
  </StrictMode>
);
