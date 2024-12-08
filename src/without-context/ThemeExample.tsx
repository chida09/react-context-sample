import { useTheme } from './useTheme';

export default function ThemeExample() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDark ? '🌞 ライト' : '🌙 ダーク'}
      </button>
      <h1>Hooks のみを使った実装</h1>
    </div>
  );
}
