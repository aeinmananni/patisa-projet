import latestIcons from "./components/icons/latest-product-icons.svg";
import LatestTitleAndIconCompo from "./components/latest-titleAndIcon-comp";
import LatestViewAllCompo from "./components/latest-veiwAllCompo";
import AnimatonBox from "./components/animation-box";
import LatestProductCarts from "./components/latest-product-carts";
import PatisateModalImages from "./components/images/latesProductImages.png";
import { LatestProductsCartType } from "../models";
const LatestProducts = () => {
  const productsCartInfo: LatestProductsCartType[] = [
    {
      id: 1,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 2,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 3,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 4,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
  ];
  return (
    <>
      <div className="px-16">
        <div className="w-full bg-blueLigth  h-80 flex flex-col px-20 py-20 rounded-xl">
          <div className="flex flex-col gap-8 px-3">
            <div className="flex justify-between  items-start">
              <LatestTitleAndIconCompo
                title="جدید ترین محصولات"
                latestIcon={latestIcons}
              />
              <LatestViewAllCompo />
            </div>
            <div className="flex h-max w-full  justify-around">
              <AnimatonBox />
              <LatestProductCarts productsCartInfo={productsCartInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
