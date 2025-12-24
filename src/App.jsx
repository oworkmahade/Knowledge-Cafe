import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  console.log(bookmarks);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-8 p-8">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks></BookMarks>

        {/* <div>
          {bookmarks.map((bookmark) => (
            <BookMarks bookmark={bookmark}></BookMarks>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default App;
