import React, { useCallback, useState, useEffect } from 'react';
import PostForm from '../src/components/Layout/PostForm';

import './App.css';
import PostList from './components/Posts/PostList';

function App() {
  // this controls the new post being added
  const [posts, setPosts] = useState([]);
  // this controls loading
  const [loading, isLoading] = useState(false);

  const fetchPosts = useCallback(async() => {
    try {
      const response = await fetch("https://blog-project-918ed-default-rtdb.europe-west1.firebasedatabase.app/posts.json");
      const data = await response.json();
      console.log(data);

      const loadedPosts = [];

      for(const key in data) {
        loadedPosts.push({
          id: key,
          date: data[key].date,
          title: data[key].title,
          blogText: data[key].text
        })
      }

      setPosts(loadedPosts);
    } catch(error) {
      throw new Error(error)
    }
  }, []);

  const addPostHandler = (async(post) => {
    isLoading(true);
    try {
      const response = await fetch("https://blog-project-918ed-default-rtdb.europe-west1.firebasedatabase.app/posts.json", {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': "application/json"
        }
      });
      const data = await response.json();
      console.log(data);

    } catch(error) {
      console.log(error)
    }
    isLoading(false);
    fetchPosts();
  });

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  let content = <PostList posts={posts} />

  return (
    <>
      <PostForm onAddPost={addPostHandler} loading={loading} />
      <div>
        {content}
      </div>
    </>
  );
}

export default App;
