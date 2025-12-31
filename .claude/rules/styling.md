# スタイリングルール

globs: src/**/*.astro, src/**/*.css, tailwind.config.*

## 基本方針

- Tailwind CSSを使用
- カラースキームはモノトーン（白黒ベース）
- フォントはM PLUS 1p（Google Fonts）

## カラーパレット

### ライトモード

| 用途 | 色 |
|------|-----|
| 背景 | white (#ffffff) |
| テキスト | gray-900 |
| サブテキスト | gray-600 |
| ボーダー | gray-200 |
| アクセント | gray-900 |

### ダークモード

| 用途 | 色 |
|------|-----|
| 背景 | gray-900 |
| テキスト | gray-100 |
| サブテキスト | gray-400 |
| ボーダー | gray-700 |
| アクセント | gray-100 |

## ダークモード実装

1. OS設定に自動追従（prefers-color-scheme）
2. トグルボタンで手動切替可能
3. 設定はlocalStorageに保存

```html
<html class="dark">
```

Tailwindの`dark:`プレフィックスを使用。

```html
<div class="bg-white dark:bg-gray-900">
```

## フォント設定

```css
font-family: 'M PLUS 1p', sans-serif;
```

ウェイト: 400 (regular), 700 (bold)

## レスポンシブ

Tailwindのブレークポイントを使用。

| プレフィックス | 幅 |
|----------------|-----|
| sm | 640px |
| md | 768px |
| lg | 1024px |

モバイルファーストで記述。

## 注意事項

- 色は直接指定せずTailwindのクラスを使用
- カスタムCSSは最小限に
- アニメーションは控えめに（モダンだが落ち着いた印象）
