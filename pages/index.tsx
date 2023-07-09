import type { GetServerSideProps, NextPage } from 'next';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import React from 'react';
import { Post } from '../types';
import PostList from '../components/PostList/PostList';

interface PageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = readdirSync('./__posts').map((file) => {
    console.log(file.slice(0, -3));
    const post = readFileSync(`./__posts/${file}`, 'utf-8');
    return matter(post).data;
  });

  return {
    props: { posts },
  };
};

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <h2>SSG-BLOG</h2>
      <p>블로그 입니다.</p>

      <div className='post-list-container'>
        {posts.map((post: Post, i: number) => (
          <PostList post={post} key={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
