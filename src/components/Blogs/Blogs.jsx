import PropTypes from "prop-types";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks, blogs, setBlogs, handleMarkAsRead }) => {
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
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
