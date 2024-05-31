import { useState } from "react";
import productSvg from "../../icon/product-icon.svg";
import { SlArrowDown } from "react-icons/sl";
import DropDown from "./drop-down";
import { CategoryModalType } from "../../../../models";
import WomanCategoryIcon from "../icons/woman-categoryIcon";
import TopWoman from "../icons/top-woman-icon";
import TShirtIcon from "../icons/t-shirt-icon";
import ShomizIcon from "../icons/shomiz-icon";
import PartnerIcon from "../icons/partner-icon";
import CropIcon from "../icons/crap-icon";
import PantsIcon from "../icons/pants-icon";
import ShortsIcon from "../icons/shorts-icon";
import MenIcons from "../icons/men-icons";
import ShortsMenIcon from "../icons/shorts-men-icon";
import TshirtMenIcon from "../icons/t-shirt-men-icon";
import PantsMenIcon from "../icons/pants-men-icon";
import UnderWearIcon from "../icons/under-wear";

const womenscategories: CategoryModalType[] = [
  { id: 1, title: "دسته بندی  های زنانه", icon: <WomanCategoryIcon /> },
  { id: 2, title: "تاپ", icon: <TopWoman /> },
  { id: 3, title: "تی - شرت", icon: <TShirtIcon /> },
  { id: 4, title: "شومیز", icon: <ShomizIcon /> },
  { id: 5, title: "شرتک", icon: <PartnerIcon /> },
  { id: 6, title: "کراپ", icon: <CropIcon /> },
  { id: 7, title: "شلوار", icon: <PantsIcon /> },
  { id: 8, title: "شلوارک", icon: <ShortsIcon /> },
];
const menCategories: CategoryModalType[] = [
  { id: 1, title: "دسته بندی های مردانه", icon: <MenIcons /> },
  { id: 2, title: "شلوارک", icon: <ShortsMenIcon /> },
  { id: 3, title: "تی - شرت", icon: <TshirtMenIcon /> },
  { id: 4, title: "شلوار", icon: <PantsMenIcon /> },
  { id: 5, title: "لباس زیر", icon: <UnderWearIcon /> },
];

const ProductsCategorization = () => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <>
      <div className="relative">
        <div
          onClick={() => setFocus(!focus)}
          className={`parentProductsCategorization group ${
            focus && "bg-colorPrimary"
          }`}
        >
          <img src={productSvg} />

          <div className="flex flex-col ">
            <span className="text-garyCustom text-sm">دسته بندی</span>
            <span
              className={`text-sm group-hover:text-white text-colorPrimary2 duration-300 ${
                focus && "text-white"
              }`}
            >
              محصولات
            </span>
          </div>
          <SlArrowDown
            className={`text-colorPrimary2 group-hover:text-white duration-300 group-hover:rotate-90 ${
              focus ? "text-white rotate-90" : ""
            }`}
          />
        </div>
        {focus && (
          <div className="flex flex-col justify-start items-start absolute py-5 right-7">
            <DropDown
              gendercategories={womenscategories}
              isRounded
              styles="px-2"
            />
            <DropDown gendercategories={menCategories} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCategorization;
