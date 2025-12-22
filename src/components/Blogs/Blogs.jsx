import { useEffect, useState } from "react";

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
      <div></div>
    </>
  );
};

export default Blogs;
