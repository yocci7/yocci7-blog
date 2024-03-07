import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import "@/public/css/Content.css";

// ブログ記事ページ
export default async function ArticlePost({ params }: { params: { slug: string } }) {
  // URLのパラメータから該当するファイル名を取得
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const headline = data.headline; // 記事のタイトル
  const img = data.img; // 記事の画像
  const tag = data.tag; // 記事のタグ
  const description = data.description; // 記事の説明
  const Published = data.datePublished; // 記事の更新日
  const Updated = data.dateUpdated; // 記事の投稿日
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <>
    <head>
      <title>{headline}</title>
      <meta name="description" content={description} />
    </head>
      <div className='Contents'>
        <h1 className='Title'>{headline}</h1>
        <div className='Date'>
          <p className='Date__Published'>{Published}</p>
          <p className='Date__Updated'>{Updated}</p>
        </div>
        <p className='Description'>{description}</p>
        <div className='Contect' dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </div>
    </>
  );
}

// generateStaticPathsを定義
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return paths;
}
