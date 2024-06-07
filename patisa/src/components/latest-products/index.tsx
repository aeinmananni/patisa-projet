import latestIcons from "./components/icons/latest-product-icons.svg";
import DeclaerTitleAndIconCompo from "./components/declear-titleAndIcon-comp";
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
      <div className="w-full bg-blueLigth  h-80 flex flex-col px-20 py-12 rounded-xl ">
        <div className="flex flex-col gap-8 px-3">
          <div className="flex justify-between  items-start">
            <DeclaerTitleAndIconCompo
              title="جدید ترین محصولات"
              icon={latestIcons}
            />
            <LatestViewAllCompo />
          </div>
          <div className="flex h-max w-full  justify-around">
            <AnimatonBox
              title="NEW"
              imageAbsolutePosition="https://s3-alpha-sig.figma.com/img/9f49/68a1/2725d6f06435626a3a2e86ad901fb166?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EFuwNwsbf0nvxVqjXX2r3dfyCKdx7H6iYMKDg0VRM5YCzDk0IxzyGohED6lq4kBfTbARuyCzAUo6327DcdYyzS6qIllrQj7U8pkT9q53mdhug6JaQrdp9yZ5-YZU~JLj8Yx8cj4jGOxUC9CXsPE5JuVfCTZS5lYh2Kp0skgpbRwtarY1fDWhcuHObdJXqkzNkdUYpH6Db54AVZvHJZnozqMNGbpGIVso-QjlCWOLzUER6plVOBHuWKlVJ9vrrCdel9AAZSKysC6-1rQzJoEJa0OzF4SXCiZ6KFU-yiSjOmxr4oc1GXpgllYp2z5pxExsUF7JyFwueRfYWIse3bB8xw__"
              imageBase="https://s3-alpha-sig.figma.com/img/b215/00ba/c8fcde7b954e1f00ea2da5f6fa79c52c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqhQ0aOXoGphj1rsEvOP6kP6TaV3iK~jdpO9~gmBqoH1ct3kqAu2ZEV4OcccNXXGDywuNrKhTEd70wXyqcLux4z7Bixfv3hJCokXcJvgL4NEOpsWXwl0cPf~GtVwajrXSSTaruavj7RPXeKrFIjhWshOIhcCqi4DCapafNhqTO5LePJqtJTUP~g0NNtLjf88MsveoSE1m4fM~YRWeNm-C1ekhyCIRQK1J1GFT6Wiv9xMG7PogDiDF7hragzdcKjYgienIlWW7SQF1H2gIq07IlziSQDQuf9BXPlcETElK7SVjIpaDQQRV0Gz-dJfPUbTe5MB25G5gIA-0i~bG2~Vjw__"
              styles={{
                titleClassName: "text-brownCustom",
                shadowTitle: "-left-3",
              }}
            />
            <LatestProductCarts productsCartInfo={productsCartInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
