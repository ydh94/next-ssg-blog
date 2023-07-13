'use client';

import React, { FC, useEffect } from 'react';
import hljs from 'highlight.js';

import 'highlight.js/styles/github-dark.css';

interface IPostDetailContentProps {
  content: any;
}

const PostDetailContent: FC<IPostDetailContentProps> = ({ content }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default PostDetailContent;
