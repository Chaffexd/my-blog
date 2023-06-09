import React, { useCallback, useState, useEffect } from 'react';
import PostForm from '../src/components/Layout/PostForm';
import { ThemeContext } from './components/context/ThemeContext';

import classes from './App.module.css';
import Header from './components/Header/Header';
import PostList from './components/Posts/PostList';
import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';

function App() {
  // this controls the new post being added
  const [posts, setPosts] = useState([]);
  // this controls loading
  const [loading, isLoading] = useState(false);
  // controls window width
  const [width, setWidth] = useState(window.innerWidth > 1300);
  // controls dark mode toggle
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
          blogText: data[key].text,
        })
      }
      setPosts(loadedPosts.reverse());
    } catch(error) {
      throw new Error(error)
    }
  }, []);

  const addPostHandler = (async(post) => {
    isLoading(true);
    // the purpose of this is to make a promise resolve after 500ms so I can have a loader when posting
    const waitFunction = () => {
      return new Promise(resolve => setTimeout(() => resolve("Posting..."), 2000))
    }
    try {
      const response = await fetch("https://blog-project-918ed-default-rtdb.europe-west1.firebasedatabase.app/posts.json", {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': "application/json"
        }
      });
      const data = await response.json();
      await waitFunction();
      console.log(data);

    } catch(error) {
      console.log(error)
    }
    isLoading(false);
    fetchPosts();
  });

  // this ensures posts are loaded when program is started
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // this sets our content, should add error handling at some point
  let content = <PostList posts={posts} />
  const updateLayout = () => {
    setWidth(window.innerWidth > 1300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout)
  })

  
  const colorScheme = theme === 'light' ? classes.containerLight : classes.containerDark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle: toggleThemeHandler }}>
      <Header />
      <div className={`${classes.mainFeed} ${colorScheme}`}>
        {width ? 
        <div className={classes.profile}>
          <Profile 
            name="Shane Chaffe"
            postSection="Posts: "
            postTotal={posts.length}
            width={width}
          />
        </div> 
        :
        <div className={classes.smallScreen}>
          <div className={classes.profile}>
            <Profile 
              name="Shane Chaffe"
              postSection="Posts: "
              postTotal={posts.length}
            />
          </div>
          <div className={`${classes.toDo} ${colorScheme}`}>
            <Todo />
          </div>
        </div>
        }
        <div className={classes.feed}>
          <PostForm onAddPost={addPostHandler} loading={loading} />
          <div className={classes.contentHolder}>
            {content}
          </div>
        </div>
        {width && <div className={`${classes.toDo} ${colorScheme}`} >
          <Todo />
        </div>}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
