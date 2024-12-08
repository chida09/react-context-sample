import { ThemeProvider } from '../with-context/ThemeContext';
import WithContextExample from '../with-context/ThemeExample';
import WithoutContextExample from '../without-context/ThemeExample';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2>Context を使った実装:</h2>
        <ThemeProvider>
          <WithContextExample />
        </ThemeProvider>
      </div>

      <div>
        <h2>Hooks のみを使った実装:</h2>
        <WithoutContextExample />
      </div>
    </div>
  );
}
