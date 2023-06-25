import Link from "next/link";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">Wiki Search!</Link>
      </h1>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
