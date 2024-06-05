import { useRef, useState } from "react";
import productSvg from "../../icon/product-icon.svg";
import { SlArrowDown } from "react-icons/sl";
import DropDown from "./drop-down";
import { useClickAway } from "react-use";
import { useStorePatisaManager } from "../../../../store/store-patisa";

const ProductsCategorization = () => {
  const { stateCategoryesWomenDropDown, stateCategoryMenDropDown } =
    useStorePatisaManager();

  const [focus, setFocus] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setFocus(false);
  });

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
            className={`text-colorPrimary2 group-hover:text-white duration-300 group-hover:rotate-90  ${
              focus ? "text-white rotate-90" : ""
            }`}
          />
        </div>
        {focus && (
          <div
            ref={ref}
            className="flex flex-col justify-start items-start absolute py-5 right-7 z-20 bg-white"
          >
            <DropDown
              gendercategories={stateCategoryesWomenDropDown}
              isRounded
              styles="px-2"
            />
            <DropDown gendercategories={stateCategoryMenDropDown} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCategorization;
