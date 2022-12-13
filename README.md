# kimromi-ui

Next.js の実装をしながら HTML や CSS の基礎を学んだりするリポジトリです。

## Memo

### HTML

#### [main](https://developer.mozilla.org/ja/docs/Web/HTML/Element/main)

- 主要な内容部分に利用される
  - see: <https://www.adobe.com/>

#### [header](https://developer.mozilla.org/ja/docs/Web/HTML/Element/header)

- 主にヘッダに利用するが、グローバルのヘッダだけでなく記事のヘッダ部分などにも利用する
  - see: <https://techcrunch.com/>

### CSS

#### CSS Modules

- 命名は camelCase が多い
  - コンポーネント側で `className={styles.camelCase}` と書くときに snake-case だと `className={styles['snake-case']}` になる
  - <https://github.com/vercel/next.js/discussions/11267> で CSS を書くときは snake-case で import した際は camelCase にする議論もあるが、普通に camalCase を使う方が多そう
