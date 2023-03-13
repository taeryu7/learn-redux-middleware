//라우트 설정하기
import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;

/*
// 포스트목록 구현하기
import React from 'react';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
*/