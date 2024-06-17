import ProductsCategorization from "./products-categorization";
import RegisterIcon from "../icon/register-icon";
import BasketComponent from "./basket-component";
import SerachBox from "./search-box";

const Navbar2 = () => {
  return (
    <>
      <div className="flex justify-between   gap-4 w-full ">
        <div className="flex  justify-start items-center gap-16 w-[200%] lg:w-max  ">
          <div className="hidden lg:block">
            <ProductsCategorization />
          </div>
          <SerachBox />
        </div>

        <div className="flex gap-5 justify-center items-center">
          <button className=" justify-center hidden lg:flex items-center w-28 gap-2 bg-blueLigth py-3 text-sm rounded-lg px-2 ">
            <RegisterIcon />

            <span className="text-colorPrimary2">ثبت نام</span>
          </button>
          <BasketComponent />
        </div>
      </div>
    </>
  );
};

export default Navbar2;
