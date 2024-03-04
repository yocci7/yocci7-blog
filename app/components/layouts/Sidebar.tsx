import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

export default async function Sidebar() {
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

      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    posts
      .slice(0, 3) // 最新の3つの記事を取得
  );

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__search">
          <input type="text" placeholder="Search" className="sidebar__search__input" />
          <div className="sidebar__search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <div className="recentArticle">
          <h4 className="recentArticle__title">
            <FontAwesomeIcon icon={faThumbtack} />
            Recent Article
          </h4>

          {posts.map((post) => (
            <div key={post.slug} className="recentArticle__item">
              <Link href={`/article/${post.slug}`}>
                <section className="recentArticle__item__section">
                  <Image
                    src={post.frontmatter.img}
                    width={256}
                    height={144}
                    className="recentArticle__item__section__img"
                    alt="No Image"
                    // priority=""
                  />
                  <div className="recentArticle__item__section__text">
                    <h4 className="recentArticle__item__section__text__headline">{post.frontmatter.headline}</h4>
                    <p className="recentArticle__item__section__text__description">
                      {post.frontmatter.description.length > 21
                        ? `${post.frontmatter.description.slice(0, 21)}...`
                        : post.frontmatter.description
                      }
                    </p>
                  </div>
                </section>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
