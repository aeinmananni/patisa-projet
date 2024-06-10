import PatisaHead from "../patisa-head";
import SliderImageComponent from "../slider-imge-component";
import PatisaServices from "../patisa-services";
import CategoryBox from "../category-box";
import LatestProducts from "../latest-products";
import BestSellingProducts from "../Best-selling-products";
import GenderSets from "../gender-set";
import ContentLatestOfPatisa from "../content-latest-of-patisa";
import PatisaFooter from "../patisa-footer";
import flash from "./icons/flash.svg";
import { useRef } from "react";

const Home = () => {
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
    <>
      <div className="h-screen overflow-y-auto flex flex-col gap-9  px-12">
        <PatisaHead ref={divRef} />
        <SliderImageComponent />
        <PatisaServices />
        <CategoryBox />

        <div className="grid grid-cols-1 gap-64 w-full h-max  ">
          <LatestProducts />
          <BestSellingProducts />
          <GenderSets />
        </div>
        <ContentLatestOfPatisa />
        <div className="  w-full  h-max  items-center flex flex-col mt-32 gap-6">
          <div
            onClick={scrollToTop}
            className=" scroll-to-top text-colorPrimary w-full flex justify-center text-sm cursor-pointer"
          >
            <img src={flash} />
            <span>بازگشت به بالا</span>
          </div>

          <PatisaFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
