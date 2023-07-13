import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import React from 'react';
import PostList from '../components/PostList/PostList';

export const getPostListData = async () => {
  const posts = readdirSync('./__posts').map((file) => {
    const post = readFileSync(`./__posts/${file}`, 'utf-8');
    return matter(post).data;
  });

  return posts;
};

const MainPage = async () => {
  const posts = await getPostListData();

  return (
    <>
      <h2>SSG-BLOG</h2>
      <p>블로그 입니다.</p>

      <div className='post-list-container'>
        {posts.map((post: any, i: number) => (
          <PostList post={post} key={i} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
