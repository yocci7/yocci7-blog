import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import "@/public/css/Article.css";


async function Article() {
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
      .sort((a, b) => new Date(b.frontmatter.dataPublished as string).getTime() - new Date(a.frontmatter.dataPublished as string).getTime())
  );

  return (
    <div className='article'>
      {posts.map((post) => (
        <article key={post.slug} className='article__item'>
          <Link href={`/article/${post.slug}`}>
            <section className='article__item__section'>
              <Image
                src={post.frontmatter.img}
                width={256}
                height={144}
                alt='No Image'
                className='article__item__section__img'
              />
              <p className="article__item__section__tag">{post.frontmatter.tag}</p>
              <div className="article__item__section__text">
                <h4 className="article__item__section__text__headline">{post.frontmatter.headline}</h4>
                <p className="article__item__section__text__description">
                  {post.frontmatter.description.length > 31
                    ? `${post.frontmatter.description.slice(0, 31)}...`
                    : post.frontmatter.description
                  }
                </p>
                <p className="article__item__section__text__dataPublished">{post.frontmatter.dataPublished}</p>
              </div>
            </section>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Article