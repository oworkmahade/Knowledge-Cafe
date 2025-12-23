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
      <div className="md:w-2/3 border-black border-2">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
