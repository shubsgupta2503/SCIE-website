import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { renderToStaticMarkup } from 'react-dom/server';

const postsDirectory = path.join(process.cwd(), path.join('data', 'Blogs'));

export function getPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostsData;
}

export function getPostPaths() {
    const files = fs.readdirSync(postsDirectory);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))
    return paths
}

export async function getPost(slug) {
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content);
    const blogText = renderToStaticMarkup(
        <MDXRemote {...mdxSource} />
    )
    return {frontMatter,blogText};

}