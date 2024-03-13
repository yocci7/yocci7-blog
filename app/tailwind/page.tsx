import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import "@/public/Styles/Article.css";
import type { Metadata } from "next";
import * as elements from "@/app/components/elements/Index"
export const metadata: Metadata = {
  title: "Tailwind | YOCCI_ii7 BLOG",
  description: "プログラミング初心者が学習した知識などを記事にまとめているサイトです。",
};

export default async function Article() {
  // ディレクトリとファイル名を取得
  const postsDirectory = path.join(process.cwd(), 'content');
  // ディレクトリ内の全てのファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルを読み込み、処理
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // 各記事の情報をオブジェクトとして返す
      return {
        slug: fileName.replace('.md', ''), // ファイル名から拡張子を削除してslugとして使用
        frontmatter: data, // フロントマターのデータ
      };
    })
  ).then((posts) =>
    posts
      // 記事を最新日付順にソート
      .sort((a, b) => new Date(b.frontmatter.datePublished as string).getTime() - new Date(a.frontmatter.datePublished as string).getTime())
      // 記事をタグでフィルタ
      .filter((post) => post.frontmatter.tag === 'Tailwind')
  );

  return (
    <>
      <div className="summary">
        <div className='summary__article'>
          <elements.ArticleSummary posts={posts} />
        </div>
      </div>
    </>
  );
}
