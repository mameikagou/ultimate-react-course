
// 这里是一个用于面试而学习的双token的例子; 

// api.js
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startRefreshing, setRefreshTokenPromise, finishRefreshing } from './authSlice';

const api = axios.create({ baseURL: 'http://your-api-url' });

api.interceptors.request.use(async (config) => {
  const dispatch = useDispatch();
  const state = store.getState().auth;

  if (state.isRefreshing && state.refreshTokenPromise) {
    // 等待 token 刷新完成
    await state.refreshTokenPromise;
  } else {
    // 开始刷新 token
    dispatch(startRefreshing());
    const refreshTokenPromise = refreshAccessToken().then(() => {
      dispatch(finishRefreshing());
    });
    dispatch(setRefreshTokenPromise(refreshTokenPromise));
    await refreshTokenPromise;
  }

  // 添加新的 token 到请求头
  config.headers.Authorization = `Bearer ${newToken}`;

  return config;
}, (error) => {
  return Promise.reject(error);
});

// 刷新 token 的函数
function refreshAccessToken() {
  return axios.post('/refresh-token', /* 你的刷新 token 参数 */).then((response) => {
    // 更新 token
    // ...
  });
}