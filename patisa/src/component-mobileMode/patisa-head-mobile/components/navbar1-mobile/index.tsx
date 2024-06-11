import productSvg from "../../../../components/patisa-head/components/icon/product-icon.svg";
import patisaIcon from "../../../../components/slider-imge-component/components/icons/patisa-Icon.svg";
import loginIcon from "../icons/login-icons.svg";
import { useStorePatisaManager } from "../../../../components/store/store-patisa";
import DropDownCustomize from "../../../../components/patisa-head/components/navbar2/products-categorization/drop-down-customaiz";

const NavbarMobile1 = () => {
  const {
    focus,
    setFocus,
    stateCategoryesWomenDropDown,
    stateCategoryMenDropDown,
  } = useStorePatisaManager();
  return (
    <div className="relative">
      <div className="flex justify-between p-2 items-center ">
        <img
          onClick={() => setFocus((c) => !c)}
          className="cursor-pointer"
          src={productSvg}
        />
        <img className="w-16 h-16" src={patisaIcon} />
        <div className="p-3 bg-blueLigth rounded-lg border border-colorPrimary">
          <img className="w-7 h-7 " src={loginIcon} />
        </div>
      </div>
      {focus && (
        <DropDownCustomize
          parentClassName="!top-16"
          stateCategoryesWomenDropDown={stateCategoryesWomenDropDown}
          stateCategoryMenDropDown={stateCategoryMenDropDown}
        />
      )}
    </div>
  );
};

export default NavbarMobile1;
