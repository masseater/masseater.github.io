/**
 * 日付を日本語形式でフォーマットする
 * @param date フォーマットする日付
 * @param locale ロケール（デフォルト: 'ja-JP'）
 */
export const formatDate = (date: Date, locale = 'ja-JP'): string => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
