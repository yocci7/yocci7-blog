import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Link from 'next/link';
import Image from 'next/image'

// ブログ記事ページ
export default async function BlogPost({ params }: { params: { slug: string } }) {
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
  const dataPublished = data.dataPublished; // 記事の投稿日
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <>
      <h1>{headline}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </>
  );
}
