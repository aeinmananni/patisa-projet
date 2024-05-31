import ProductsCategorization from "./products-categorization";
import RegisterIcon from "../icon/register-icon";
import BasketIcons from "../icon/basket";
import SerachIcon from "./icons/search-icon";

const Navbar2 = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 w-full ">
        <div className="flex  justify-center items-center gap-16  w-max ">
          <ProductsCategorization />
          <div className="relative">
            <SerachIcon />
            <input
              className="bg-blueLigth w-96 h-10 outline-none text-sm px-2 rounded-md"
              placeholder="جست و جوی محصولات"
            />
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <button className="flex justify-center items-center w-28 gap-2 bg-blueLigth py-3 text-sm rounded-lg px-2 ">
            <RegisterIcon />

            <span className="text-colorPrimary2">ثبت نام</span>
          </button>
          <div className="bg-orangeCustom flex justify-center items-center p-2  rounded-lg ml-3">
            <BasketIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
