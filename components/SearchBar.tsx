import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-row items-center border rounded-full h-[44px] w-[492px]">
      <SearchNormal1
        variant="Outline"
        color="var(--secondary-400)"
        className="mx-4"
      />

      <input
        type="text"
        className="outline-none flex-1"
        placeholder="Search something here"
      ></input>

      <Image
        src="/filter.svg"
        alt="icon filter"
        width={24}
        className="mx-4"
        height={24}
      />
    </div>
  );
};

export default SearchBar;
