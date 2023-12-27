import { Heart, Notification, Setting2 } from "iconsax-react";
import Image from "next/image";
import React from "react";

const ProfileAndNoti = () => {
  return (
    <ul className="flex justify-center items-center flex-row gap-5">
      <li className="rounded-full border-2 border-gray-100 p-2">
        <Heart variant="Bold" color="var(--secondary-400)" />
      </li>
      <li className="relative p-2 rounded-full border-2 border-gray-100">
        <Notification variant="Bold" color="var(--secondary-400)" />

        <div className="w-3 h-3 bg-red-500 absolute top-0 right-0 rounded-full"></div>
      </li>
      <li className="p-2 rounded-full border-2 border-gray-100">
        <Setting2 variant="Bold" color="var(--secondary-400)" />
      </li>
      <li className="rounded-full">
        <Image
          src="/avatar.jpg"
          alt="profile"
          height={44}
          width={44}
          className="object-contain"
        />
      </li>
    </ul>
  );
};

export default ProfileAndNoti;
