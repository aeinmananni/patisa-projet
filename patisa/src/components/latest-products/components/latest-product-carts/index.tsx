import Colors from "./components/colors";
import Sizes from "./components/sizes";
import TranslateBoxCarts from "../translate-box-card";

type Props = {
  colors: string[];
  imageAddres: string;
  dressTitle: string;
  code: string;
  price: string;
  sizes: string[];
  off?: string;
};

const LatestProductCarts = ({
  colors,
  imageAddres,
  dressTitle,
  code,
  price,
  sizes,
  off,
}: Props) => {
  return (
    <>
      <div className="flex flex-col bg-white relative items-start h-full gap-3 shadow-lg w-max p-3 py-5 rounded-lg group ">
        <Colors itemColors={colors} />
        {off && (
          <div className="absolute px-1 top-5 left-8 pt-1 h-12 flex justify-center items-center rounded-b-full text-white  bg-orangeCustom z-20">
            <span className="text-center ">{off}</span>
          </div>
        )}
        <div className="relative overflow-hidden">
          <TranslateBoxCarts />
          <img className="w-48 h-48" src={imageAddres} />
        </div>
        <div className="flex gap-2">
          <h1>{dressTitle}</h1>
          <h1>کد {code}</h1>
        </div>
        <h1 className="text-xl w-full text-left text-colorPrimary">
          {price} تومان
        </h1>
        <Sizes sizes={sizes} />
      </div>
    </>
  );
};

export default LatestProductCarts;
