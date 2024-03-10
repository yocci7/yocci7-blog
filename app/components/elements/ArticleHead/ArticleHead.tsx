import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Props = {
  params: {
    slug: string;
  };
};

const generateMetadataForArticle = async ({ params }: Props): Promise<Metadata> => {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  const headline = data.headline;
  const description = data.description;

  return {
    title: headline,
    description: description,
  };
};

const ArticleHead = async ({ params }: Props) => null;

export default ArticleHead;
export { generateMetadataForArticle };
