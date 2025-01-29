import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useForumContext } from '../context/ForumContext';

interface CommentFormProps {
  postId: string;
}

export function CommentForm({ postId }: CommentFormProps) {
  const [comment, setComment] = useState('');
  const { dispatch } = useForumContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: `c${Date.now()}`,
      author: {
        id: 'current-user',
        name: 'Current User',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        isDoctor: false,
      },
      content: comment.trim(),
      timestamp: 'Just now',
    };

    dispatch({
      type: 'ADD_COMMENT',
      payload: { postId, comment: newComment },
    });
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
      <div className="flex-1">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none resize-none transition-all duration-200"
          rows={1}
        />
      </div>
      <button
        type="submit"
        disabled={!comment.trim()}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Send</span>
      </button>
    </form>
  );
}