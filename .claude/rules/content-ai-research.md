# AI調査記事 (AI Research) 作成ルール

globs: src/content/ai-research/**/*.md

## 概要

AIに調査させた内容をまとめた記事。検索エンジンには表示されず、AI生成であることが明示される。

## ファイル配置

```
src/content/ai-research/{slug}/
└── index.md      # 記事本文
```

## Frontmatter 必須項目

```yaml
---
title: "記事タイトル"
description: "記事の説明文（100文字程度）"
pubDate: 2025-01-01          # 公開日
---
```

## Frontmatter 任意項目

```yaml
---
updatedDate: 2025-01-15      # 更新日
aiModel: "Claude 3.5 Sonnet" # 使用したAIモデル
researchDate: 2025-01-01     # 調査実施日
disclaimer: "カスタム免責事項" # デフォルト免責事項を上書き
draft: true                  # 下書き（trueで非公開）
---
```

## 検索エンジン除外

- 一覧ページ・詳細ページともに `<meta name="robots" content="noindex, nofollow">` が自動設定
- サイトマップには含まれない
- RSSフィードには含まれない

## 表示上の特徴

- 記事上部にamber色の警告バナーが表示される
- ナビゲーションのリンクもamber色で区別される
- 免責事項が自動で表示される

## 注意事項

- **正確性は保証されない**: 必ず公式情報源で確認を促す
- **著作権に注意**: 引用元を明記する
- **個人的なメモ用途**: 公開はするが検索には出さない
- タグ機能は意図的に省略（検索性を下げるため）
