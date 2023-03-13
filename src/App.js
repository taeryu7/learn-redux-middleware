//라우트 설정하기
import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;


/*
// 포스트목록 구현하기
import React from 'react';
import PostListContainer from './containers/PostListContainer';

function App() {
  return <PostListContainer />;
}

export default App;
*/

/*
import React from 'react';
import CounterContainer from './containers/CounterContainer';

function App() {
  return <CounterContainer />;
}

export default App;
*/