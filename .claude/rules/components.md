# Astroコンポーネント設計ルール

globs: src/components/**/*.astro, src/layouts/**/*.astro

## 基本方針

- Astroコンポーネント (.astro) を優先
- クライアントサイドJSが必要な場合のみReact/Preact等を検討
- Islands Architectureを意識し、インタラクティブな部分を最小化

## コンポーネント分類

### layouts/

ページ全体のレイアウト。

- `BaseLayout.astro` - 共通HTML構造、head、footer
- `PostLayout.astro` - 記事詳細ページ用
- `NoteLayout.astro` - つぶやき詳細ページ用（必要なら）

### components/

再利用可能なUIパーツ。

- `Header.astro` - ナビゲーション
- `Footer.astro` - フッター
- `PostCard.astro` - 記事一覧のカード
- `NoteCard.astro` - つぶやき一覧のカード
- `TagList.astro` - タグ一覧
- `TableOfContents.astro` - 目次
- `ShareButtons.astro` - SNSシェアボタン
- `PrevNextNav.astro` - 前後記事ナビ
- `DarkModeToggle.astro` - ダークモード切替
- `Search.astro` - 検索UI

## Props定義

TypeScriptで型定義する。

```astro
---
type Props = {
  title: string
  description?: string
}

const { title, description } = Astro.props
---
```

## クライアントサイドJS

必要な場合は `<script>` タグで記述。

```astro
<script>
  // ダークモード切替など
</script>
```

## 注意事項

- コンポーネントは単一責任に保つ
- Propsは明示的に型定義
- スタイルはTailwind CSSで記述
