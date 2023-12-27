import { Component, MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconOnly?: React.ReactNode;
  minimal?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  largeSize?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CardCarProps {
  item: {
    id?: number;
    name?: string;
    brand?: string;
    isLiked?: boolean;
    thumbnail?: string;
    gasoline?: number;
    tranmission?: string;
    people?: number;
    price?: number;
  };
}

export interface AdsProps {
  item: {
    id: number;
    title?: string;
    description?: string;
    thumbnail?: string;
  };
}
