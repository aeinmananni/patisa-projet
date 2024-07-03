import DeclaerTitleAndIconCompo from "../latest-products/components/declear-titleAndIcon-comp";
import bestSelingIcon from "./components/icons/best-seling-icon.svg";
import AnimatonBox from "../latest-products/components/animation-box";
import BestSellingCart from "./components/best-selling-cart";
import { useStorePatisaManager } from "../store/store-patisa";
import Image1 from "./components/icons/eee.gif";
import Image2 from "./components/icons/image2-gif.gif";

const BestSellingProducts = () => {
  const { BestSellingArray } = useStorePatisaManager();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80%] lg:h-80  py-5 lg:py-14 w-full bg-orangeCustom  rounded-lg  xl:px-16 border ">
        <div className="flex flex-col gap-5 xl:gap-12 w-max  h-full">
          <DeclaerTitleAndIconCompo
            title="پر فروش ترین محصولات"
            icon={bestSelingIcon}
            parentClassName="!justify-start  xl:!px-10"
            textStyles="text-white"
          />
          <div className=" grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:justify-between gap-4 ">
            <AnimatonBox
              title="Popular"
              imageAbsolutePosition={Image2}
              imageBase={Image1}
              styles={{
                parentClassName: "bg-colorPrimary hidden  xl:flex",
                iconAbsoluetClassName: "!right-8 !rotate-[29deg] ",
                titleClassName: "text-colorDark ",
                shadowTitle: "!text-colorDark2 -left-3 ",
              }}
            />

            {BestSellingArray.map((item) => (
              <BestSellingCart
                key={item.id}
                titleHeaderCart={item.title}
                imageHeadCart={item.image}
                BestCartInfo={item.CartInfo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingProducts;
