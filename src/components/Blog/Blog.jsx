import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="blogContainer border-b-2 py-4 mb-8">
      <div>
        <img
          className="rounded-xl"
          src={cover}
          alt={`Cover  Picture of the title ${title}`}
        ></img>
      </div>

      <div className="authorReadTimeContainer md:flex md:flex-row justify-between items-center py-6">
        <div className="authorContainer md:flex md:flex-row gap-4 items-center">
          <div className="authorImage">
            <img className="rounded-full w-16 h-16" src={author_img}></img>
          </div>
          <div className="authorContent">
            <h1 className="authorName ">{author}</h1>
            <p className="postedDate">{posted_date}</p>
          </div>
        </div>

        <div className="readTimeBookMarkContainer md:flex md:flex-row gap-4">
          <p>
            {reading_time}
            <span> min read</span>
          </p>
          <button onClick={() => handleAddToBookmarks(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold py-4">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href=""> {hash}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(parseInt(reading_time), blog)}
        className="my-4 text-blue-600 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
