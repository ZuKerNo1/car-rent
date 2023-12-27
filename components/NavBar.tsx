import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import { ProfileAndNoti, SearchBar } from ".";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10 border-b bg-white">
      <nav className="max-w-[1312px] mx-auto flex justify-between items-center py-10">
        <div className="flex justify-between items-center w-1/2">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.jpg"
              alt="logo morent"
              width={148}
              height={44}
              className="object-contain"
            />
          </Link>

          <SearchBar />
        </div>

        <ProfileAndNoti />
      </nav>
    </header>
  );
};

export default NavBar;
