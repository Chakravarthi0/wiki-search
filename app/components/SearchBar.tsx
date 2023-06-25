"use client";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Submitting");
    router.push(`/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button
        onClick={handleSubmit}
        className="p-2 text-xl rounded-xl bg-neutral-950 ml-2 font-bold text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
