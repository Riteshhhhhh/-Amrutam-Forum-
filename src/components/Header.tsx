import React from 'react';
import { MessageCircle, Lightbulb } from 'lucide-react';
import { useForumContext } from '../context/ForumContext';

export function Header() {
  const { state, dispatch } = useForumContext();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex space-x-12 h-16">
          <button
            onClick={() => dispatch({ type: 'SET_TAB', payload: 'forum' })}
            className={`flex items-center space-x-3 h-full border-b-2 px-3 transition-all duration-200 ${
              state.activeTab === 'forum'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-purple-500 hover:border-purple-300'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium text-base">Forum</span>
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_TAB', payload: 'thoughts' })}
            className={`flex items-center space-x-3 h-full border-b-2 px-3 transition-all duration-200 ${
              state.activeTab === 'thoughts'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-purple-500 hover:border-purple-300'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span className="font-medium text-base">Thoughts</span>
          </button>
        </div>
      </div>
    </header>
  );
}