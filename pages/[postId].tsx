import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import convertMarkdownToHtml from '../util/convertMarkdownToHtml';

export const getStaticPaths = async () => {
  const paths = readdirSync('./__posts')
    .map((post) => post.slice(0, -3))
    .map((id) => ({
      params: {
        postId: String(id),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = readFileSync(`./__posts/${params?.postId}.md`, 'utf-8');

  const { data, content } = matter(post);

  return {
    props: { meta: data, content: await convertMarkdownToHtml(content) },
  };
};

const PostDetailPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ meta, content }) => {
  return (
    <div>
      {meta.title}
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default PostDetailPage;
