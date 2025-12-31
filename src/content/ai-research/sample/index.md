---
title: "サンプル: AIによる調査記事のテスト"
description: "AI調査記事機能のテスト用サンプルです。この記事は検索エンジンにインデックスされません。"
pubDate: 2025-12-31
aiModel: "Claude 3.5 Sonnet"
researchDate: 2025-12-31
draft: true
---

これはAI調査記事のサンプルです。

## 機能の確認

この記事では以下の機能が正しく動作しているか確認できます：

1. **noindex対応**: この記事は検索エンジンにインデックスされません
2. **警告バナー**: 記事上部にAI生成であることを示すバナーが表示されます
3. **メタ情報**: 使用したAIモデルや調査日が表示されます

## 使い方

AI調査記事を作成するには、`src/content/ai-research/` ディレクトリに記事を配置してください。

```yaml
---
title: "記事タイトル"
description: "記事の説明"
pubDate: 2025-01-01
aiModel: "Claude 3.5 Sonnet"  # 任意
researchDate: 2025-01-01      # 任意
disclaimer: "カスタム免責事項"  # 任意
draft: false
---
```
