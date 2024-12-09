import { useState } from 'react';

/**
 * --backgroundや--foregroundは、src/styles/globals.cssの変数を参照している
 * documentElement は常に <html> 要素を返す
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.style.setProperty(
      '--background',
      newTheme ? '#0a0a0a' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--foreground',
      newTheme ? '#ededed' : '#171717'
    );
  };

  return { isDark, toggleTheme };
};
