import PatisaHead from "../patisa-head";
import SliderImageComponent from "../slider-imge-component";
import PatisaServices from "../patisa-services";
import CategoryBox from "../category-box";
import LatestProducts from "../latest-products";
const Home = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto flex flex-col gap-9 pb-64">
        <PatisaHead />
        <SliderImageComponent />
        <PatisaServices />
        <CategoryBox />
        <LatestProducts />
      </div>
    </>
  );
};

export default Home;
