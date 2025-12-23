import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";

function App() {
  return (
    <>
      <Header></Header>

      <div className="md:flex gap-4 mx-4 p-4 border-gray-600 border-2">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
