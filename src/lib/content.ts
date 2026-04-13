import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
    slug: string;
    title: string;
    date: string;
    thumbnail?: string;
    summary?: string;
    category?: string;
    image?: string;
    contentHtml?: string;
    [key: string]: unknown;
}

export function getAllPosts(collection: 'blog' | 'news' | 'gallery'): PostData[] {
    const collectionDir = path.join(contentDirectory, collection);

    if (!fs.existsSync(collectionDir)) {
        return [];
    }

    const fileNames = fs.readdirSync(collectionDir).filter(f => f.endsWith('.md'));

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(collectionDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            slug,
            title: matterResult.data.title || slug,
            date: matterResult.data.date || new Date().toISOString(),
            ...matterResult.data
        } as PostData;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPost(collection: 'blog' | 'news', slug: string): Promise<PostData | null> {
    const fullPath = path.join(contentDirectory, collection, `${slug}.md`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        ...matterResult.data
    } as PostData;
}
