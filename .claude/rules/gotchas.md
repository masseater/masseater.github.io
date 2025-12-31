# 注意点・落とし穴

## Astro 5.x

### Content Collections
- `src/content/config.ts` ではなく `src/content.config.ts` に配置する
- `glob()` ローダーを使用してコンテンツを読み込む

```typescript
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts' }),
  schema: z.object({ ... }),
});
```

## Tailwind CSS v4

### @apply使用時の注意
- `<style>`タグ内で`@apply`を使う場合、`@reference`ディレクティブが必要
- CSSファイルをインポートしていないスコープではユーティリティクラスが認識されない

```astro
<style is:global>
  @reference "../styles/global.css";

  .prose {
    @apply text-gray-900 dark:text-gray-100;
  }
</style>
```

## Pagefind

### 型定義
- `@pagefind/default-ui`には型定義がないため、`env.d.ts`で宣言が必要

```typescript
// src/env.d.ts
declare module '@pagefind/default-ui' {
  export class PagefindUI {
    constructor(options: { element?: HTMLElement | string | null; showSubResults?: boolean });
  }
}
```
