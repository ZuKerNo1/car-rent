import Image from "next/image";
import React from "react";
import { CustomButton } from ".";
import { CardCarProps } from "@/types";
import { GasStation, Heart, Profile2User } from "iconsax-react";

const CardCar = ({ item }: CardCarProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="h-[388px] w-full px-8 py-5 rounded-lg shadow-xl">
        <div className="w-full h-full flex flex-col justify-between">
          {/* Name & brand */}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-sm font-semibold text-gray-500">
                {item.brand}
              </p>
            </div>
            {item.isLiked ? (
              <Heart variant="Bold" color="#ED3F3F" />
            ) : (
              <Heart variant="Outline" color="var(--secondary-400)" />
            )}
          </div>

          {/* Image car */}
          <div className="flex flex-col w-full h-full justify-between max-sm:flex-row ">
            <div className="flex items-center mx-auto grow my-auto">
              <Image
                src={`/${item.thumbnail}`}
                width={233}
                height={72}
                alt="Xe"
                className="object-contain "
              />
            </div>

            {/* Test responsive */}
            <div className="flex justify-between mb-6 max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:gap-4">
              <div className="flex justify-center items-center">
                <GasStation variant="Bold" color="var(--secondary-100)" />
                <p className="ml-1 text-sm font-medium text-gray-500 max-[360px]:text-xs">
                  {item.gasoline}L
                </p>
              </div>

              <div className="flex justify-center items-center ">
                <Image
                  src="/tranmission.svg"
                  width={24}
                  height={24}
                  alt="icon gasoline"
                />
                <p className="ml-1 text-sm font-medium text-gray-500 max-[360px]:text-xs">
                  {item.tranmission}
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Profile2User variant="Bold" color="var(--secondary-100)" />
                <p className="ml-1 text-sm font-medium text-gray-500 max-[360px]:text-xs">
                  {item.people} People
                </p>
              </div>
            </div>
          </div>

          {/* Info car */}
          <div className="flex flex-col ">
            {/*  */}
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-end">
                <p className="text-xl font-bold">${item.price?.toFixed(2)}/</p>
                <p className="text-sm font-bold text-gray-600">day</p>
              </div>

              <CustomButton
                title="Rent Now"
                btnType="button"
                containerStyles="w-[116px] px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
