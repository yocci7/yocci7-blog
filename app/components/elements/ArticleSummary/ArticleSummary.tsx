import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}

interface ArticleReturnProps {
  posts: Post[];
}

const ArticleReturn: React.FC<ArticleReturnProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <article key={post.slug} className='summary__article__item'>
          <Link href={`/article/${post.slug}`}>
            <section className='summary__article__item__section'>
              <Image
                src={post.frontmatter.img}
                width={384}
                height={216}
                className='summary__article__item__section__img'
                alt='No Image'
                priority
              />
              <p className="summary__article__item__section__tag">{post.frontmatter.tag}</p>
              <div className="summary__article__item__section__text">
                <p className="summary__article__item__section__text__headline">
                  {post.frontmatter.headline.length > 38
                    ? `${post.frontmatter.headline.slice(0, 38)}...`
                    : post.frontmatter.headline
                  }
                </p>
                <p className="summary__article__item__section__text__description">
                  {post.frontmatter.description}
                </p>
                <div className='summary__article__item__section__text__date'>
                  <p className="summary__article__item__section__text__date__Published">
                    {post.frontmatter.datePublished}</p>
                  <p className="summary__article__item__section__text__date__Updated">{post.frontmatter.dateUpdated}</p>
                </div>
              </div>
            </section>
          </Link>
        </article>
      ))}
    </>
  );
};

export default ArticleReturn;
