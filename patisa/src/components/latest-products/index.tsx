import latestIcons from "./components/icons/latest-product-icons.svg";
import DeclaerTitleAndIconCompo from "./components/declear-titleAndIcon-comp";
import LatestViewAllCompo from "./components/latest-veiwAllCompo";
import AnimatonBox from "./components/animation-box";
import LatestProductCarts from "./components/latest-product-carts";
import { useStorePatisaManager } from "../store/store-patisa";
import { useWindowSize } from "react-use";
import { getVisibleItems } from "../function/with-handler";
import { LatestProductsCartType } from "../models";

const LatestProducts = () => {
  const { productsCartInfo } = useStorePatisaManager();
  const { width } = useWindowSize();

  console.log("Wiith", width);
  return (
    <>
      <div className="w-full bg-blueLigth  h-80 flex flex-col  py-12 rounded-xl ">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center px-2 lg:px-20 ">
            <DeclaerTitleAndIconCompo
              title="جدید ترین محصولات"
              icon={latestIcons}
            />
            <LatestViewAllCompo />
          </div>
          <div className="flex h-80 w-full  justify-center gap-4 px-2 ">
            <AnimatonBox
              title="NEW"
              imageAbsolutePosition="https://s3-alpha-sig.figma.com/img/9f49/68a1/2725d6f06435626a3a2e86ad901fb166?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EFuwNwsbf0nvxVqjXX2r3dfyCKdx7H6iYMKDg0VRM5YCzDk0IxzyGohED6lq4kBfTbARuyCzAUo6327DcdYyzS6qIllrQj7U8pkT9q53mdhug6JaQrdp9yZ5-YZU~JLj8Yx8cj4jGOxUC9CXsPE5JuVfCTZS5lYh2Kp0skgpbRwtarY1fDWhcuHObdJXqkzNkdUYpH6Db54AVZvHJZnozqMNGbpGIVso-QjlCWOLzUER6plVOBHuWKlVJ9vrrCdel9AAZSKysC6-1rQzJoEJa0OzF4SXCiZ6KFU-yiSjOmxr4oc1GXpgllYp2z5pxExsUF7JyFwueRfYWIse3bB8xw__"
              imageBase="https://s3-alpha-sig.figma.com/img/b215/00ba/c8fcde7b954e1f00ea2da5f6fa79c52c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqhQ0aOXoGphj1rsEvOP6kP6TaV3iK~jdpO9~gmBqoH1ct3kqAu2ZEV4OcccNXXGDywuNrKhTEd70wXyqcLux4z7Bixfv3hJCokXcJvgL4NEOpsWXwl0cPf~GtVwajrXSSTaruavj7RPXeKrFIjhWshOIhcCqi4DCapafNhqTO5LePJqtJTUP~g0NNtLjf88MsveoSE1m4fM~YRWeNm-C1ekhyCIRQK1J1GFT6Wiv9xMG7PogDiDF7hragzdcKjYgienIlWW7SQF1H2gIq07IlziSQDQuf9BXPlcETElK7SVjIpaDQQRV0Gz-dJfPUbTe5MB25G5gIA-0i~bG2~Vjw__"
              styles={{
                titleClassName: "text-brownCustom",
                shadowTitle: "-left-3",
              }}
            />

            {getVisibleItems({ products: productsCartInfo }).map(
              (item: LatestProductsCartType, index: number) => (
                <>
                  <LatestProductCarts
                    key={index}
                    colors={item.colors}
                    imageAddres={item.imageAddres}
                    dressTitle={item.dressTitle}
                    code={item.code}
                    price={item.code}
                    sizes={item.sizes}
                  />
                </>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
