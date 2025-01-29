import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { ForumProvider, useForumContext } from './context/ForumContext';
import { mockPosts } from './mockData';

function ForumContent() {
  const { state } = useForumContext();
  const filteredPosts = state.posts.filter(
    (post) => state.activeTab === 'forum' ? post.type === 'question' : post.type === 'thought'
  );

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts yet in this section.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        )}
      </div>
    </main>
  );
}

function App() {
  return (
    <ForumProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ForumContent />
      </div>
    </ForumProvider>
  );
}

export default App;