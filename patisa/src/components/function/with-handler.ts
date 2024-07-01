/* eslint-disable react-hooks/rules-of-hooks */
import { WidthHandelType } from "../models";
import { useWindowSize } from "react-use";

export const getVisibleItems = <T,> ({products}:WidthHandelType<T>) => {
  const {width} = useWindowSize()
    if (width < 500) {
      return products.slice(0, 1);
    } else if (width < 968) {
      return products.slice(0, 2);
    } else {
      return products;
    }
  };