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
        <div className="authorContainer border-blue-600 border-2 md:flex md:flex-row gap-4 items-center">
          <div className="authorImage">
            <img className="rounded-full w-16" src={author_img}></img>
          </div>
          <div className="authorContent">
            <h1 className="authorName">{author}</h1>
            <p className="postedDate">{posted_date}</p>
          </div>
        </div>

        <div className="readTimeContainer border-green-600 border-2">
          <p>{reading_time}</p>
          {/* <img>Bookmark Logo</img> */}
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
