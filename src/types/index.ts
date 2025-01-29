export interface User {
  id: string;
  name: string;
  avatar: string;
  isDoctor?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  saved: boolean;
  type: 'question' | 'thought';
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
}