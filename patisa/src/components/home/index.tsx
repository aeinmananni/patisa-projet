import PatisaHead from "../patisa-head";
import SliderImageComponent from "../slider-imge-component";
import PatisaServices from "../patisa-services";
import CategoryBox from "../category-box";
import LatestProducts from "../latest-products";
import BestSellingProducts from "../Best-selling-products";
import GenderSets from "../gender-set";
const Home = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto flex flex-col gap-9 pb-64 px-12">
        <PatisaHead />
        <SliderImageComponent />
        <PatisaServices />
        <CategoryBox />

        <div className="grid grid-cols-1 gap-16 w-full">
          <LatestProducts />
          <BestSellingProducts />
          <GenderSets />
        </div>
      </div>
    </>
  );
};

export default Home;
