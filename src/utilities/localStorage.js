//bookmark
const getStoredBookmarks = () => {
  const storedBookmarksString = localStorage.getItem("bookmarks");
  if (storedBookmarksString) {
    return JSON.parse(storedBookmarksString);
  }
  return [];
};

// readingTime
const getStoredReadingTime = () => {
  const storedReadingTimeString = localStorage.getItem("readingTime");
  if (storedReadingTimeString) {
    return JSON.parse(storedReadingTimeString);
  }
  return 0;
};

// bookmark
const saveToLS = (bookmarks) => {
  const bookmarksStringified = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksStringified);
};

// bookmark
const addToLSBookmarks = (id) => {
  const bookmarks = getStoredBookmarks();
  bookmarks.push(id);
  saveToLS(bookmarks);
};
//readingTime
const saveReadingTimeToLS = (newReadingTime) => {
  const readingTimeStringified = JSON.stringify(newReadingTime);
  localStorage.setItem("readingTime", readingTimeStringified);
};

//readingTime
const addToLSReadingTime = (newReadingTime) => {
  saveReadingTimeToLS(newReadingTime);
};

// bookmark

const removeBookMarkIdFroLs = (id) => {
  const bookmark = getStoredBookmarks();
  const remaining = bookmark.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export {
  getStoredBookmarks,
  addToLSBookmarks,
  addToLSReadingTime,
  getStoredReadingTime,
  removeBookMarkIdFroLs,
};
