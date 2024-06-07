import BestSellingCartInfo from "./components/best-selling-cart-info";
import BestSellingHeaderCart from "./components/best-selling-Header-cart";
import { BestCartInfoType } from "../../../models";

type Props = {
  imageHeadCart?: string;
  titleHeaderCart: string;
  BestCartInfo?: BestCartInfoType[];
};
const BestSellingCart = ({
  imageHeadCart,
  titleHeaderCart,
  BestCartInfo,
}: Props) => {
  return (
    <>
      <div className="h-full w-max rounded-lg bg-white border  shadow-lg ">
        <BestSellingHeaderCart
          imageHeadCart={imageHeadCart}
          titleHeaderCart={titleHeaderCart}
        />
        <div className="grid grid-cols-1 w-full ">
          {BestCartInfo?.map((item, index) => (
            <BestSellingCartInfo
              key={item.id}
              title={item.dressTitle}
              images={item.imageAddres}
              code={item.code}
              price={item.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellingCart;
