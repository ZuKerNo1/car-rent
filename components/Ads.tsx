import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import { AdsProps } from "@/types";

const Ads = ({ item }: AdsProps) => {
  return (
    <div
      className={`flex relative flex-col justify-start items-start rounded-lg p-6 w-[640px] h-[360px] ${
        item.id == 1 ? 'bg-[url("/bg_ads_1.png")]' : 'bg-[url("/bg_ads_2.png")]'
      }`}
    >
      <div className="w-72 h-40 text-white mb-5">
        <p className="text-3xl font-semibold leading-[48px] mb-4">
          {item.title}
        </p>
        <p className="text-base font-medium leading-6">{item.description}</p>
      </div>
      <CustomButton
        title="Rental Car"
        containerStyles={`w-[120px] px-5 ${
          item.id == 1 ? "bg-[#3563E9]" : "bg-[#54A6FF]"
        }`}
      />
      <Image
        className="absolute bottom-0 left-1/2 translate-x-[-45%] object-contain h-[116px]"
        src={`/${item.thumbnail}`}
        width={406}
        height={116}
        alt="image car"
      />
    </div>
  );
};

export default Ads;
