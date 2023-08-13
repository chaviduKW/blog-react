//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  // const handleDelete=(id)=>{
  //   const newBlogs = blogs.filter(blog=> blog.id!==id);
  //   setBlogs(newBlogs);
  // };


  return (
    <div className="home">
    {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs"/> */}
    </div>
  );
}

export default Home;