import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import { Post as PostType } from '../types';
import { useForumContext } from '../context/ForumContext';
import { CommentForm } from './CommentForm';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [showComments, setShowComments] = useState(false);
  const { dispatch } = useForumContext();
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
      <div className="flex items-start space-x-4 sm:space-x-6">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-gray-900">{post.author.name}</h3>
            {post.author.isDoctor && (
              <span className="px-2.5 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                Doctor
              </span>
            )}
            <span className="text-sm text-gray-500 ml-auto">{post.timestamp}</span>
          </div>
          <p className="mt-3 text-gray-700 whitespace-pre-wrap">{post.content}</p>
          
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_LIKE', payload: post.id })}
              className="flex items-center space-x-2.5 text-gray-500 hover:text-purple-600 transition-colors duration-200"
            >
              <Heart 
                className={`w-5 h-5 transition-all duration-200 ${
                  post.liked ? 'fill-purple-600 text-purple-600 scale-110' : ''
                }`} 
              />
              <span>{post.likes}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2.5 text-gray-500 hover:text-purple-600 transition-colors duration-200"
            >
              <MessageCircle className={`w-5 h-5 ${showComments ? 'text-purple-600' : ''}`} />
              <span>{post.comments.length}</span>
            </button>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_SAVE', payload: post.id })}
              className="flex items-center space-x-2.5 text-gray-500 hover:text-purple-600 transition-colors duration-200"
            >
              <Bookmark 
                className={`w-5 h-5 transition-all duration-200 ${
                  post.saved ? 'fill-purple-600 text-purple-600 scale-110' : ''
                }`} 
              />
            </button>
          </div>

          {showComments && (
            <div className="mt-6">
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3 sm:space-x-4">
                    <img
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-medium text-gray-900">{comment.author.name}</h4>
                        {comment.author.isDoctor && (
                          <span className="px-2 py-0.5 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                            Doctor
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mt-1.5">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <CommentForm postId={post.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}