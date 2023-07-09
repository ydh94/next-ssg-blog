import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import React from 'react';

// export async function getServerSideProps({ params }) {
//   // console.log(params.postId);
//   const posts = readdirSync('./__posts').map((file) => {
//     const content = readFileSync(`./__posts/${file}`, 'utf-8');
//     return matter(content).data;
//   });

//   console.log(posts);

//   return {
//     props: { posts },
//   };
// }

const PostDetailPage = () => {
  return <div></div>;
};

export default PostDetailPage;
