import React from "react";
import './App.css';
import './Global.css'
import Header from './components/header'
import PostList from './components/PostList';
import PostIcon from './components/PostItem';
function App () {
  return (
    <>
      <Header/>
      <PostList/>
    </>
  )
}

export default App;