
import { configureStore } from '@reduxjs/toolkit';

// actions.js
export const setKeyValueData = (data) => {
  return {
    type: 'SET_KEY_VALUE_DATA',
    payload: data
  }
}

const tablesReducer = (state=[], action) => {
  const keys = Object.keys(action);
  switch(action.type){
    case 'SET_KEY_VALUE_DATA':
      return keys.map(key=>({
        title:key,
      }))
    default:
      return state;
  }
}

// store.js
export const store = configureStore({
  reducer: {
    table: tablesReducer
  }
})




export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

