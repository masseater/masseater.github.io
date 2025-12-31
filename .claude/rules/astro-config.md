# Astro設定ルール

globs: astro.config.*, src/content/config.ts

## astro.config.mjs 必須設定

```javascript
export default defineConfig({
  site: 'https://masseater.github.io',
  server: {
    port: 14000,  // 開発サーバーは14000以降を使用
  },
  integrations: [
    tailwind(),
    expressiveCode(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
})
```

## 開発サーバー

- ポートは14000以降を使用すること
- 他のプロジェクトとの競合を避けるため

## Content Collections 設定

`src/content/config.ts` で定義。

### Posts Collection

```typescript
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})
```

### Notes Collection

```typescript
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    pubDate: z.coerce.date(),
  }),
})
```

## 必須インテグレーション

| パッケージ | 用途 |
|------------|------|
| @astrojs/tailwind | Tailwind CSS |
| astro-expressive-code | コードハイライト |
| @astrojs/rss | RSSフィード |
| @pagefind/default-ui | 検索機能 |

## GitHub Pages用設定

- `output: 'static'` を指定
- baseは不要（ユーザーサイトのため）

## 注意事項

- 画像最適化はAstro標準の`<Image>`を使用
- Content Collectionsで型安全にコンテンツを扱う
- draft: trueの記事は本番ビルドで除外
