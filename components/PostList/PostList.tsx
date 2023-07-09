import { FC } from 'react';
import { Post } from '../../types';
import classNames from 'classnames/bind';
import sc from './index.module.scss';
import Link from 'next/link';

const cx = classNames.bind(sc);

interface IPostListProps {
  post: Post;
}

const PostList: FC<IPostListProps> = ({ post }) => {
  return (
    <Link href={`/${post.id}`}>
      <article className={cx('post-list-wrapper')}>
        <h3 className={cx('post-title')}>{post.title}</h3>
        <span className={cx('post-date')}>{post.date}</span>
        <span className={cx('post-desc')}>{post.description}</span>
        <p className={cx('post-chips-container')}>
          {post.categories.map((category, i) => (
            <span className={cx('post-chip')} key={i}>
              {category}
            </span>
          ))}
        </p>
      </article>
    </Link>
  );
};

export default PostList;
