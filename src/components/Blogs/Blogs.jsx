import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  // hold all blogs data using useState
  const [blogs, setBlogs] = useState([]);
  //load all blogs data using useEffect
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="w-2/3 border-blue-600 border-2">
        <h1>Blogs Length: {blogs.length}</h1>
      </div>
    </>
  );
};

export default Blogs;
