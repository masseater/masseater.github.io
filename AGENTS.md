# masseater's blog - Project Guidelines

## プロジェクト概要

Astro製の個人ブログサイト。GitHub Pagesでホスティング。

| 項目 | 値 |
|------|-----|
| サイト名 | masseater's blog |
| URL | https://masseater.github.io |
| 言語 | 日本語 (lang="ja") |

## 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Astro |
| スタイリング | Tailwind CSS |
| フォント | M PLUS 1p (Google Fonts) |
| カラースキーム | モノトーン (白黒ベース) |
| コードハイライト | Expressive Code |
| 検索 | Pagefind |
| RSS | @astrojs/rss |
| デプロイ | GitHub Pages + GitHub Actions |

## ディレクトリ構成

```
src/
├── content/
│   ├── posts/           # 通常記事
│   │   └── {year}/{month}/{slug}/
│   │       ├── index.md
│   │       └── images/  # 記事専用画像
│   └── notes/           # つぶやき
│       └── {timestamp}-{slug}.md
├── components/
├── layouts/
└── pages/
    ├── index.astro
    ├── about.astro
    ├── posts/
    ├── notes/
    └── tags/
```

## コンテンツタイプ

### 通常記事 (Posts)

- パス: `/posts/{year}/{month}/{slug}`
- タイトル必須
- タグ付け可能
- 目次自動生成
- 公開日・更新日表示
- 前後ナビゲーション
- SNSシェアボタン

### つぶやき (Notes)

- パス: `/notes`
- タイトルなし、短文のみ
- Twitter/X風の形式
- タグなし
- シンプルな表示

## 機能一覧

| 機能 | 状態 |
|------|------|
| タグ分類 | 記事のみ |
| 検索 | Pagefind |
| ダークモード | OS自動 + 手動トグル |
| RSS | あり |
| 目次 | 記事のみ、自動生成 |
| シェアボタン | X |

## ページ構成

| ページ | パス | 内容 |
|--------|------|------|
| トップ | `/` | 最新記事10件 + 最新つぶやき10件 |
| 記事一覧 | `/posts` | 全記事表示 |
| つぶやき一覧 | `/notes` | 全つぶやき表示 |
| About | `/about` | 自己紹介 + SNSリンク (GitHub, X) |
| タグ別 | `/tags/{tag}` | タグでフィルタリング |

## ナビゲーション

- Home
- Posts
- Notes
- About
