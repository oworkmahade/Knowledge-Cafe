import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
  return (
    <h1 className="text-xl font-bold bg-white p-4 rounded-xl mb-2">
      {bookmark.title}
    </h1>
  );
};

BookMark.propTypes = {
  BookMark: PropTypes.object.isRequired,
};

export { BookMark };
