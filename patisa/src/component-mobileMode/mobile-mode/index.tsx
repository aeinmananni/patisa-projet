import PatisaHeadMobile from "../patisa-head-mobile";
import PatisaMotto from "../../components/Batisa's motto";
import SliderImageComponentMobile from "../slider-image-compoenentMobile";
import PatisaServisesMobile from "../patisa-servises-mobile";
import CategoryBoxMobile from "../category-box-mobile";
import LatestProductsMobile from "../latest-porduct-mobile";
import BestSellingProductsMobile from "../best-seilling-component-mobile";
import GenderSetMobile from "../gender-set-mobile";
import ContentsLastOfPatisaMobile from "../content-lastOf-patisa-mobile";
import flash from "../../components/home/icons/flash.svg";
import PatisaFooterMobile from "../patisa-footer-mobile";
import { useRef } from "react";

const MobileMode = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    if (divRef.current) {
      console.log("Scrolling to top...");
      divRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("divRef is null");
    }
  };
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden flex-col gap-9 sm:hidden  pb-2">
      <PatisaMotto textStyle="text-sm" />
      <div className="h-full w-full px-2 ">
        <PatisaHeadMobile ref={divRef} />
        <SliderImageComponentMobile />
        <PatisaServisesMobile />
        <CategoryBoxMobile />

        <LatestProductsMobile />
        <BestSellingProductsMobile />
        <GenderSetMobile />
        <ContentsLastOfPatisaMobile />
        <div className="  w-full  h-max  items-center flex flex-col mt-6 gap-6 pb-12">
          <div
            onClick={scrollToTop}
            className=" scroll-to-top bg-colorPrimary text-white py-3 w-full flex justify-center text-sm cursor-pointer"
          >
            <img src={flash} />
            <span>بازگشت به بالا</span>
          </div>
          <PatisaFooterMobile />
        </div>
      </div>
    </div>
  );
};

export default MobileMode;
