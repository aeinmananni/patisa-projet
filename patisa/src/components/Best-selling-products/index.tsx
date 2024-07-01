import DeclaerTitleAndIconCompo from "../latest-products/components/declear-titleAndIcon-comp";
import bestSelingIcon from "./components/icons/best-seling-icon.svg";
import AnimatonBox from "../latest-products/components/animation-box";
import BestSellingCart from "./components/best-selling-cart";
import { useStorePatisaManager } from "../store/store-patisa";

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
              imageAbsolutePosition="https://s3-alpha-sig.figma.com/img/e232/337d/d62f9a6761428eda908eaa9ca0ca71af?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLhbINqhZnu8Dao~XLtf1kOen75BMXcsHVbhiRxlCB2mVGrZej-cgSSUJMszjO0MlceuMxeD7axQaknFE836JlZgluJEkjOUpx5LKtYW5FlkN3GoQlOTsQwhC~Hr6E-qIsnDyIAiSuzEE3FHKoyF3MlCMD~zp9yG8C30Beem5dLDA8t9Ku6oosKhAxauyNVietg-SZo0GQ0iBFNG2DTFJy2osAbZxJjkwhEUSlJ8Ye9xoPW4vfsyPAXQ5-T5xIs-hRq6Ny~UZfxqrvuOILIaml5JNB6ErJ5dD1gmqFuEVqTXkrDBQOzDsHWzDJadULY9kmnHRmqthI4GXeEpGohfcQ__"
              imageBase="https://s3-alpha-sig.figma.com/img/fe7c/27d5/c95f67681d7cb467c8d1be11eb9e55d5?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJdzi9v79ENjY3rSyBQlfUb6gk-ffRxgJoFVw~ao8goKhSLtEOgemtIgW-2NYuUbwa21wUJiLQOvV29tFuXenQMnPpyp6nvrsUT4PRb5gU~0O~GaS8ClI5xJTZQrGQYRzbMPlOduinjtF1b9W5PWAq2ePy7VrB6i3lmazAjzKxSYp1XDaIHA5nuZ~BFuFX-gOneJCezB-uKJATZkEQG57HAO5nIxeOPSw6HhgLF2kQrpubhpIzN5RYUg0ksd8pqAeDgvCJBZDN0UbqF8DveAHzAzKMbAOQ9gqleySEg~4CRpbtcB4Kb75F~6eVk4gel-zRUZzUZTNX4s-G5jM3BwUw__"
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
