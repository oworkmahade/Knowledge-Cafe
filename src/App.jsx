import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useEffect, useState } from "react";
import {
  addToLSBookmarks,
  getStoredBookmarks,
  addToLSReadingTime,
} from "./utilities/localStorage";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const exists = bookmarks.find((bookmark) => bookmark.id === blog.id);

    if (!exists) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      addToLSBookmarks(blog.id);
    }
  };

  useEffect(() => {
    if (blogs.length > 0) {
      const lsStoredBookmarks = getStoredBookmarks();
      const savedBookmarks = [];
      for (const id of lsStoredBookmarks) {
        const lsStoredBlog = blogs.find((blog) => blog.id === id);
        if (lsStoredBlog) {
          savedBookmarks.push(lsStoredBlog);
        }
      }
      setBookmarks(savedBookmarks);
    }
  }, [blogs]);

  const handleMarkAsRead = (time) => {
    const newReadingTime = markAsRead + time;
    setMarkAsRead(newReadingTime);
    addToLSReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-8 p-8">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          blogs={blogs}
          setBlogs={setBlogs}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} markAsRead={markAsRead}></BookMarks>
      </div>
    </>
  );
}

export default App;
