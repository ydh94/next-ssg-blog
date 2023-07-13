import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

import convertMarkdownToHtml from '../../../util/convertMarkdownToHtml';
import PostDetailContent from '../../components/PostDetailContent';

type Params = {
  params: {
    postId: number;
  };
};

export const generateStaticParams = async () => {
  const paths = readdirSync('./__posts')
    .map((post) => post.slice(0, -3))
    .map((id) => ({
      params: {
        postId: String(id),
      },
    }));

  return paths;
};

export const getPostDetailData = async (postId: number) => {
  const post = readFileSync(`./__posts/${postId}.md`, 'utf-8');
  const { data, content } = matter(post);

  return { meta: data, content: await convertMarkdownToHtml(content) };
};

export const generateMetadata = async ({ params }: Params) => {
  const { meta } = await getPostDetailData(params.postId);
  return {
    title: meta.title,
  };
};

const PostDetailPage = async ({ params }: Params) => {
  const { content } = await getPostDetailData(params.postId);

  return (
    <div>
      <PostDetailContent content={content} />
    </div>
  );
};

export default PostDetailPage;
