import PatisaMotto from "../../Batisa's motto";
import BestSellingProducts from "../../Best-selling-products";
import CategoryBox from "../../category-box";
import GenderSets from "../../gender-set";
import LatestProducts from "../../latest-products";
import PatisaFooter from "../../patisa-footer";
import PatisaHead from "../../patisa-head";
import PatisaServices from "../../patisa-services";
import flash from "../icons/flash.svg";
import { useRef } from "react";
import SliderImageComponent from "../../slider-imge-component";
import ContentLatestOfPatisa from "../../content-latest-of-patisa";

const WindowsMode = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (divRef.current) {
      console.log("Scrolling to top...");
      divRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("divRef is null");
    }
  };

  return (
    <div className="flex flex-col gap-4 h-screen overflow-y-auto">
      <PatisaMotto />
      <div className="flex-col gap-9 px-2 md:px-12 flex">
        <PatisaHead ref={divRef} />
        <SliderImageComponent />
        <PatisaServices />
        <CategoryBox />

        <div className="grid grid-cols-1 gap-64 w-full h-max  pb-44">
          <LatestProducts />
          <BestSellingProducts />
          <GenderSets />
        </div>
        <ContentLatestOfPatisa />
        <div className="  w-full  h-max  items-center flex flex-col mt-2 md:mt-32 gap-6">
          <div
            onClick={scrollToTop}
            className="scroll-to-top py-5 md:py-0 text-white bg-colorPrimary md:bg-transparent  md:text-colorPrimary w-full flex justify-center text-sm cursor-pointer"
          >
            <img src={flash} />
            <span>بازگشت به بالا</span>
          </div>

          <PatisaFooter />
        </div>
      </div>
    </div>
  );
};

export default WindowsMode;
