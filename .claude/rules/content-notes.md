# つぶやき (Notes) 作成ルール

globs: src/content/notes/**/*.md

## ファイル配置

```
src/content/notes/{timestamp}-{slug}.md
```

例: `2025-01-01-hello-world.md`

## Frontmatter

```yaml
---
pubDate: 2025-01-01T12:00:00+09:00  # 公開日時（時刻まで指定）
---
```

## 本文形式

- タイトルなし
- 短文のみ（Twitter/X風）
- Markdownは使用可能だが基本はプレーンテキスト
- 画像添付は可能だが推奨しない

## 例

```markdown
---
pubDate: 2025-01-01T12:00:00+09:00
---

今日からブログを始めました。よろしくお願いします。
```

## 注意事項

- タグは付けない
- タイトルは設定しない
- 長文は通常記事 (Posts) に書く
- timestampはファイル名ソート用
