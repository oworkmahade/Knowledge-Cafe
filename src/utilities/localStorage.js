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
//readingTime
const saveReadingTimeToLS = (readingTime) => {
  const readingTimeStringified = JSON.stringify(readingTime);
  localStorage.setItem("readingTime", readingTimeStringified);
};

//readingTime
const addToLSReadingTime = (newReadingTime) => {
  const readingTime = getStoredReadingTime();
  readingTime.push(newReadingTime);
  saveReadingTimeToLS(readingTime);
};

export { getStoredBookmarks, addToLSBookmarks, addToLSReadingTime };
