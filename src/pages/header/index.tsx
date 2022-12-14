import ReactMarkdown from 'react-markdown';

const text = `
## メモ

- HTML
  - header タグを利用
- CSS
  - flexbox の \`justify-content: space-between;\` を使って左右に寄せている
    - <https://developer.mozilla.org/ja/docs/Web/CSS/justify-content>
  - \`align-items: center;\` で上下中央にコンテンツを配置
    - <https://developer.mozilla.org/ja/docs/Web/CSS/align-items>

## 参考

- https://primer.style/
- https://www.adobe.com/jp/
`;

export default function HeaderPage() {
  return (
    <main>
      <h1>Header</h1>
      <ReactMarkdown>{text}</ReactMarkdown>
    </main>
  );
}
