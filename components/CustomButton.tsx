import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  title,
  rightIcon,
  leftIcon,
  iconOnly,
  minimal,
  smallSize,
  mediumSize,
  largeSize,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`flex justify-center items-center rounded-lg text-white h-11 bg-[#3563E9] ${containerStyles} ${
        minimal ? "bg-white" : ""
      } ${smallSize ? "h-[29px] px-4 py-[5px]" : ""} ${
        mediumSize ? "h-[37px] px-4 py-[9px]" : ""
      } ${largeSize ? "h-[53px] w-[89px] px-6 py-[13px]" : ""}`}
      onClick={handleClick}
    >
      {leftIcon && <div className="relative w-6 h-6">{leftIcon}</div>}
      {!iconOnly ? (
        <span className={`font-semibold text-base`}>{title}</span>
      ) : (
        <div className="relative w-6 h-6">{iconOnly}</div>
      )}
      {rightIcon && <div className="relative w-6 h-6">{rightIcon}</div>}
    </button>
  );
};

export default CustomButton;
