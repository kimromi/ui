# kimromi-ui

Next.js の実装をしながら HTML や CSS の基礎を学んだりするリポジトリです。

## Memo

### HTML

### CSS

#### CSS Modules

- 命名は camelCase が多い
  - コンポーネント側で `className={styles.camelCase}` と書くときに snake-case だと `className={styles['snake-case']}` になる
  - <https://github.com/vercel/next.js/discussions/11267> で CSS を書くときは snake-case で import した際は camelCase にする議論もあるが、普通に camalCase を使う方が多そう
