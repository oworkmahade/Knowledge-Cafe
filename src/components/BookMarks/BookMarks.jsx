import React from "react";
import PropTypes from "prop-types";
import { BookMark } from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="md:w-1/3">
        <h1 className="p-4 m-4 border-purple-300 border-2 rounded-xl font-bold bg-slate-200">
          Spent time on read : <span>{readingTime}</span>
        </h1>

        <div className=" p-4 m-4 bg-slate-100 rounded-xl">
          <h1 className="text-xl font-bold mb-2">
            Bookmarked Blogs: {bookmarks.length}
          </h1>
          {bookmarks.map((bookmark) => (
            <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
          ))}
        </div>
      </div>
    </>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default BookMarks;
