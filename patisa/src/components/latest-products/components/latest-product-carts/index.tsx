import { LatestProductsCartType } from "../../../models";
import Colors from "./components/colors";
import Sizes from "./components/sizes";
import TranslateBoxCarts from "../translate-box-card";

type Props = {
  productsCartInfo: LatestProductsCartType[];
};

const LatestProductCarts = ({ productsCartInfo }: Props) => {
  return (
    <>
      {productsCartInfo.map((items) => (
        <div className="flex flex-col bg-white relative items-start h-full gap-3 shadow-lg w-max p-3 py-5 rounded-lg group">
          <Colors itemColors={items.colors} />

          <div className="relative overflow-hidden">
            <TranslateBoxCarts />
            <img className="w-48 h-48" src={items.imageAddres} />
          </div>
          <div className="flex gap-2">
            <h1>{items.dressTitle}</h1>
            <h1>کد {items.code}</h1>
          </div>
          <h1 className="text-xl w-full text-left text-colorPrimary">
            {items.price} تومان
          </h1>
          <Sizes sizes={items.sizes} />
        </div>
      ))}
    </>
  );
};

export default LatestProductCarts;
