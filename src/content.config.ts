import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    pubDate: z.coerce.date(),
  }),
});

const aiResearch = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/ai-research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // AI調査に関するメタ情報
    aiModel: z.string().optional(), // 使用したAIモデル（例: "Claude 3.5 Sonnet"）
    researchDate: z.coerce.date().optional(), // 調査実施日
    disclaimer: z.string().optional(), // カスタム免責事項
    ogImage: z.string().optional(), // OGP画像
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, notes, aiResearch };
