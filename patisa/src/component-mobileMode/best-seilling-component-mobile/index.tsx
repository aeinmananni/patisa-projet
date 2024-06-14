import BestSellingCart from "../../components/Best-selling-products/components/best-selling-cart";
import DeclaerTitleAndIconCompo from "../../components/latest-products/components/declear-titleAndIcon-comp";
import { useStorePatisaManager } from "../../components/store/store-patisa";
import bestSelingIcon from "../../components/Best-selling-products/components/icons/best-seling-icon.svg";

const BestSellingProductsMobile = () => {
  const { BestSellingArray } = useStorePatisaManager();

  return (
    <>
      <div className="h-[170%] rounded-xl py-2 mt-48 flex justify-center items-center w-full bg-orangeCustom ">
        <div className="flex flex-col h-full gap-4  w-max">
          <DeclaerTitleAndIconCompo
            title="پر فروش ترین محصولات"
            icon={bestSelingIcon}
            parentClassName="!justify-start text-white"
          />
          <div className="grid grid-cols-1  gap-4 items-center   pb-12">
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

export default BestSellingProductsMobile;
