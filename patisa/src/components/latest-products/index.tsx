import latestIcons from "./components/icons/latest-product-icons.svg";
import DeclaerTitleAndIconCompo from "./components/declear-titleAndIcon-comp";
import LatestViewAllCompo from "./components/latest-veiwAllCompo";
import AnimatonBox from "./components/animation-box";
import LatestProductCarts from "./components/latest-product-carts";
import { getVisibleItems } from "../function/with-handler";
import { LatestProductsCartType, LatestProducCartSalseType } from "../models";
import ImageSale from "./components/images/sale-image.png";
import starImage from "./components/icons/star.gif";
import boxImage from "./components/icons/box.gif";

type Props = {
  parentClassName?: string;
  title?: string;
  sale?: boolean;
  productsCartInfo?: (LatestProductsCartType | LatestProducCartSalseType)[];
};

const LatestProducts = ({
  parentClassName,
  title,
  sale,
  productsCartInfo,
}: Props) => {
  return (
    <>
      <div
        className={`w-full relative bg-blueLigth  h-80 flex flex-col  py-12 rounded-xl ${parentClassName}`}
      >
        {sale && (
          <img
            className="object-fill absolute  top-0 left-0 w-full h-full"
            src={ImageSale}
          />
        )}
        <div className="flex flex-col gap-8 z-20 absolute left-[8%]">
          <div className="flex justify-between items-center px-2 lg:px-20 ">
            <DeclaerTitleAndIconCompo
              textStyles=""
              title={title ?? ""}
              icon={latestIcons}
            />
            <LatestViewAllCompo />
          </div>
          <div className="flex h-80 w-full  justify-center gap-4 px-2 ">
            <AnimatonBox
              title="NEW"
              imageAbsolutePosition={starImage}
              imageBase={boxImage}
              styles={{
                titleClassName: "text-brownCustom",
                shadowTitle: "-left-3",
              }}
            />

            {getVisibleItems({ products: productsCartInfo ?? [] }).map(
              (
                item: LatestProductsCartType | LatestProducCartSalseType,
                index: number
              ) => (
                <>
                  {index < 4 && (
                    <LatestProductCarts
                      key={index}
                      colors={item.colors}
                      imageAddres={item.imageAddres}
                      dressTitle={item.dressTitle}
                      code={item.code}
                      price={item.code}
                      sizes={item.sizes}
                      off={"off" in item ? item.off : undefined}
                    />
                  )}
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
