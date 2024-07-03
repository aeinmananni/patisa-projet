import BestSellingProducts from "../../Best-selling-products";
import CategoryBox from "../../category-box";
import GenderSets from "../../gender-set";
import LatestProducts from "../../latest-products";
import PatisaServices from "../../patisa-services";
import SliderImageComponent from "../../slider-imge-component";
import ContentLatestOfPatisa from "../../content-latest-of-patisa";
import { useStorePatisaManager } from "../../store/store-patisa";

const WindowsMode = () => {
  const { productsCartInfo, productsCartInfoSales } = useStorePatisaManager();
  return (
    <>
      <SliderImageComponent />
      <PatisaServices />
      <CategoryBox />
      <div className="grid grid-cols-1 gap-64 w-full h-max  pb-44">
        <LatestProducts
          productsCartInfo={productsCartInfoSales}
          sale
          title="حراج آخر فصل"
        />
        <LatestProducts
          productsCartInfo={productsCartInfo}
          title="جدید ترین محصولات"
        />
        <BestSellingProducts />
        <GenderSets />
      </div>
      <ContentLatestOfPatisa />
    </>
  );
};

export default WindowsMode;
