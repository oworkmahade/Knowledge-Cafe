import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="blogContainer border-b-2 py-4">
      <div>
        <img className="rounded-xl" src={cover}></img>
      </div>

      <div className="authorReadTimeContainer border-red-600 border-2 md:flex md:flex-row justify-between items-center py-4">
        <div className="authorContainer border-blue-600 border-2">
          <h1>authorContainer</h1>
        </div>
        <div className="readTimeContainer border-green-600 border-2">
          <h1>readTimeContainer</h1>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
