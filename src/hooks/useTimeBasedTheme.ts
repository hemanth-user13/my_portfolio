import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function useTimeBasedTheme() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    const shouldBeDark = hour < 6 || hour >= 18;
    const storedPreference = localStorage.getItem('theme');

    if (!storedPreference && shouldBeDark && theme === 'light') {
      toggleTheme();
    }
  }, []);

  return null;
}
