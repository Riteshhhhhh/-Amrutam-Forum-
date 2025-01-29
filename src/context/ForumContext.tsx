import React, { createContext, useContext, useReducer } from 'react';
import { Post, Comment } from '../types';
import { mockPosts } from '../mockData';

interface ForumState {
  posts: Post[];
  activeTab: 'forum' | 'thoughts';
}

type ForumAction =
  | { type: 'SET_TAB'; payload: 'forum' | 'thoughts' }
  | { type: 'TOGGLE_LIKE'; payload: string }
  | { type: 'TOGGLE_SAVE'; payload: string }
  | { type: 'ADD_COMMENT'; payload: { postId: string; comment: Comment } };

const ForumContext = createContext<{
  state: ForumState;
  dispatch: React.Dispatch<ForumAction>;
} | null>(null);

const initialState: ForumState = {
  posts: mockPosts,
  activeTab: 'forum',
};

function forumReducer(state: ForumState, action: ForumAction): ForumState {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, activeTab: action.payload };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, likes: post.likes + (post.liked ? -1 : 1), liked: !post.liked }
            : post
        ),
      };
    case 'TOGGLE_SAVE':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, saved: !post.saved }
            : post
        ),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ),
      };
    default:
      return state;
  }
}

export function ForumProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(forumReducer, initialState);

  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
}

export function useForumContext() {
  const context = useContext(ForumContext);
  if (!context) {
    throw new Error('useForumContext must be used within a ForumProvider');
  }
  return context;
}