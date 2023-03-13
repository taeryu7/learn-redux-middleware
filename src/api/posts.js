// redux-thunk로 프로미스 다루기

// handleAsyncActions 함수로 posts 리듀서 리팩토링
import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions
} from '../lib/asyncUtils';

// 액션 타입

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 아주 쉽게 thunk 함수를 만들 수 있다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했다.
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts')(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
}

//ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-ㅡ-
/*
TMI
  case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts')(state, action);
    ↑위의 이 코드를

    ↓이렇게 표현 할 수 있다.
  case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, 'posts');
      return postsReducer(state, action);

*/

/*
// 가짜 API 함수 만들기
// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어',
    body: '리덕스 미들웨어를 직접 제작'
  },
  {
    id: 2,
    title: 'redux-thunk',
    body: 'redux-thunk를 사용해서 비동기 작업을 처리'
  },
  {
    id: 3,
    title: 'redux-saga',
    body:
      '나중엔 redux-saga를 사용해서 비동기 작업을 처리'
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  await sleep(500); // 0.5초 쉬고
  return posts.find(post => post.id === id); // id 로 찾아서 반환
};
*/