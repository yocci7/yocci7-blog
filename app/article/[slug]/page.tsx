import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import "@/public/Styles/Content.css";
import { Metadata } from 'next';
import { generateMetadataForArticle } from '@/app/components/elements/ArticleHead/ArticleHead';

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

// ページごとのメタデータを動的に生成する関数
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  return generateMetadataForArticle({ params });
};

// ブログ記事ページ
export default async function ArticlePost({ params }: { params: { slug: string } }) {
  // URLのパラメータから該当するファイル名を取得
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const headline = data.headline; // 記事のタイトル
  const description = data.description; // 記事の説明
  const Published = data.datePublished; // 記事の更新日
  const Updated = data.dateUpdated; // 記事の投稿日
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <>
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
