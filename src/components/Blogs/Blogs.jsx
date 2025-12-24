import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks }) => {
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
      <div className="md:w-2/3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmarks={handleAddToBookmarks}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
