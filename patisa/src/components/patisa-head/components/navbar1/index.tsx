import patisaIcon from "../icon/patisa-icon.svg";
import Navlink from "./components/navlink";
import Suported from "./components/suported";
import productIcon from "../../components/icon/product-icon.svg";
import patisaSingleIcon from "../../../slider-imge-component/components/icons/patisa-Icon.svg";
import LoginComponents from "./components/login-component";
import DropDownCustomize from "../navbar2/products-categorization/drop-down-customaiz";
import { useStorePatisaManager } from "../../../store/store-patisa";

const Navbar1 = () => {
  const {
    focus,
    setFocus,
    stateCategoryesWomenDropDown,
    stateCategoryMenDropDown,
  } = useStorePatisaManager();
  return (
    <div className="flex justify-between items-center ">
      <div className="block lg:hidden relative">
        <img src={productIcon} onClick={() => setFocus((c) => !c)} />
        {focus && (
          <DropDownCustomize
            stateCategoryMenDropDown={stateCategoryMenDropDown}
            stateCategoryesWomenDropDown={stateCategoryesWomenDropDown}
          />
        )}
      </div>
      <img className="hidden lg:block" src={patisaIcon} alt="" />
      <img src={patisaSingleIcon} className="w-16 h-16 lg:hidden " />
      <LoginComponents />
      <Navlink />
      <Suported />
    </div>
  );
};

export default Navbar1;
