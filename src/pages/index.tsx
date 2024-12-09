import Heading from '../example/Heading';
import Section from '../example/Section';
import Heading2 from '../example2/Heading';
import Section2 from '../example2/Section';
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

      <div style={{ marginBottom: '40px' }}>
        <h2>Hooks のみを使った実装:</h2>
        <WithoutContextExample />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>公式ドキュメントの例(example)</h2>
        <a href="https://ja.react.dev/learn/passing-data-deeply-with-context" target='_blank' style={{ color: '#0b57d0' }}>公式ドキュメント</a>
        <p>ステップ1〜2のコンテクストの使用まで（コンテクストの提供はまだ行なっていないため、hタグは全てデフォルトの1になる）</p>
        <Section>
        <Heading>Title</Heading>
          <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
            </Section>
          </Section>

          {/* NOTE: useContext使用前は、Props（level）が必要だった */}
          {/* <Heading level={1}>Title</Heading>
          <Section>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Section>
              <Heading level={3}>Sub-heading</Heading>
              <Heading level={3}>Sub-heading</Heading>
              <Heading level={3}>Sub-heading</Heading>
            </Section>
          </Section> */}
        </Section>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>公式ドキュメントの例(example2)</h2>
        <a href="https://ja.react.dev/learn/passing-data-deeply-with-context" target='_blank' style={{ color: '#0b57d0' }}>公式ドキュメント</a>
        <p>全ステップ</p>
        <Section2>
        <Heading2>Title2</Heading2>
          <Section2>
            <Heading2>Heading2</Heading2>
            <Heading2>Heading2</Heading2>
            <Heading2>Heading2</Heading2>
            <Section2>
              <Heading2>Sub-heading2</Heading2>
              <Heading2>Sub-heading2</Heading2>
              <Heading2>Sub-heading2</Heading2>
            </Section2>
          </Section2>
        </Section2>
      </div>
    </div>
  );
}
