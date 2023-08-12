import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "welcome to the new blog"
  const likes = 50;
  return (
    <>
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
      </div>
    </>
  )
}

export default App
