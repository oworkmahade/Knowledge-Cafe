const getStoredBookmarks = () => {
  const storedBookmarksString = localStorage.getItem("bookmarks");
  if (storedBookmarksString) {
    return JSON.parse(storedBookmarksString);
  }
  return [];
};

const saveToLS = (bookmarks) => {
  const bookmarksStringified = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksStringified);
};

const addToLSBookmarks = (id) => {
  const bookmarks = getStoredBookmarks();
  bookmarks.push(id);
  saveToLS(bookmarks);
};

export { getStoredBookmarks, addToLSBookmarks };
