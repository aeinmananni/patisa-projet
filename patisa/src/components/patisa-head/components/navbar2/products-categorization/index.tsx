import productSvg from "../../icon/product-icon.svg";
import { SlArrowDown } from "react-icons/sl";
import { useStorePatisaManager } from "../../../../store/store-patisa";
import DropDownCustomize from "./drop-down-customaiz";
const ProductsCategorization = () => {
  const {
    stateCategoryesWomenDropDown,
    stateCategoryMenDropDown,
    focus,
    setFocus,
  } = useStorePatisaManager();

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setFocus((c) => !c)}
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
          <DropDownCustomize
            stateCategoryesWomenDropDown={stateCategoryesWomenDropDown}
            stateCategoryMenDropDown={stateCategoryMenDropDown}
          />
        )}
      </div>
    </>
  );
};

export default ProductsCategorization;
