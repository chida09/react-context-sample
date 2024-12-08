import { useTheme } from './ThemeContext';

export default function ThemeExample() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDark ? '🌞 ライト' : '🌙 ダーク'}
      </button>
      <h1>Context を使った実装</h1>
    </div>
  );
}
