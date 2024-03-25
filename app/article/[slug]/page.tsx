import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Link from 'next/link';
import "@/public/Styles/Content.css";
import { Metadata } from 'next';
import { generateMetadataForArticle } from '@/app/components/elements/ArticleHead/ArticleHead';

// ページごとのメタデータを動的に生成する関数
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  return generateMetadataForArticle({ params });
};

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

  // 前後の記事へのリンク先を取得
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(postsDirectory);

  // 記事を日付でソート
  const sortedPosts = fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return { slug: fileName.replace('.md', ''), headline: data.headline, datePublished: data.datePublished };
    })
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

  const currentIndex = sortedPosts.findIndex((post) => post.slug === slug);
  const previousPostSlug = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1].slug : null;
  const nextPostSlug = currentIndex > 0 ? sortedPosts[currentIndex - 1].slug : null;

  // 前後の記事のヘッドラインを取得
  const previousPostHeadline = previousPostSlug ? sortedPosts[currentIndex + 1].headline : null;
  const nextPostHeadline = nextPostSlug ? sortedPosts[currentIndex - 1].headline : null;

  return (
    <>
      <div className='Contents'>
        {/* タイトル */}
        <h1 className='Contents__Title'>{headline}</h1>

        {/* 投稿日＆更新日 */}
        <div className='Contents__Date'>
          <p className='Contents__Date__Published'>{Published}</p>
          <p className='Contents__Date__Updated'>{Updated}</p>
        </div>

        {/* 説明文 */}
        <p className='Contents__Description'>{description}</p>

        <nav className="toc" />

        {/* Markdown要素 */}
        <div className='Contents__Content' dangerouslySetInnerHTML={{ __html: contentHtml }}></div>

        {/* 前後の記事へのリンク */}
        <div className='Contents__Link'>
          {previousPostSlug && (
            <Link href={`/article/${previousPostSlug}`} className='Contents__Link__Previous'>
              前の記事
              <p className='Contents__Link__Previous__headline'>
                {previousPostHeadline.length > 53
                  ? `${previousPostHeadline.slice(0, 53)}...`
                  : previousPostHeadline
                }
              </p>
            </Link>
          )}
          {nextPostSlug && (
            <Link href={`/article/${nextPostSlug}`} className='Contents__Link__Next'>
              次の記事
              <p className='Contents__Link__Next__headline'>
                {nextPostHeadline.length > 53
                  ? `${nextPostHeadline.slice(0, 53)}...`
                  : nextPostHeadline
                }
              </p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
