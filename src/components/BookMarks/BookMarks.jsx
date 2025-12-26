import React from "react";
import PropTypes from "prop-types";
import { BookMark } from "../BookMark/BookMark";

const BookMarks = ({ bookmarks }) => {
  return (
    <>
      <div className="md:w-1/3 p-4 m-4 bg-slate-100 rounded-xl">
        <h1 className="text-xl font-bold mb-2">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
        ))}
      </div>
    </>
  );
};

BookMarks.propTypes = {
  BookMarks: PropTypes.array.isRequired,
};

export default BookMarks;
