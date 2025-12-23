import profile_img from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="p-4 mx-4 flex flex-row border-b-2 justify-between items-center border-green-600 border-2 mb-4">
      <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
      <img src={profile_img}></img>
    </header>
  );
};

export default Header;
