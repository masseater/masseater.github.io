# 通常記事 (Posts) 作成ルール

globs: src/content/posts/**/*.md

## ファイル配置

```
src/content/posts/{year}/{month}/{slug}/
├── index.md      # 記事本文
└── images/       # 記事専用画像
```

## Frontmatter 必須項目

```yaml
---
title: "記事タイトル"
description: "記事の説明文（OGP用、100文字程度）"
pubDate: 2025-01-01          # 公開日
tags: ["tag1", "tag2"]       # タグ（配列）
---
```

## Frontmatter 任意項目

```yaml
---
updatedDate: 2025-01-15      # 更新日（更新時に追加）
ogImage: "./images/og.png"   # 記事専用OGP画像
draft: true                  # 下書き（trueで非公開）
---
```

## 画像の参照方法

記事と同ディレクトリに配置し、相対パスで参照する。

```markdown
![説明](./images/screenshot.png)
```

## 注意事項

- タイトルは必須
- descriptionはOGPに使用されるため必ず設定
- タグは既存のものを優先して使用
- 画像はpublic/ではなく記事ディレクトリに配置
