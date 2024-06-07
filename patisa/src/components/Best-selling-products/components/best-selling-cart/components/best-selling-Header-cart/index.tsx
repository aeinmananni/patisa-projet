import UnderTextBorder from "../../../icons/border-under-title.svg";

type Props = {
  imageHeadCart?: string;
  titleHeaderCart: string;
};

const BestSellingHeaderCart = ({ imageHeadCart, titleHeaderCart }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center bg-blueLigth overflow-hidden  h-28 gap-2 w-max pl-4">
        <img className="w-36 h-36 -mr-5" src={imageHeadCart} />
        <div className="flex flex-col items-end gap-2">
          <span className="text-2xl">{titleHeaderCart}</span>
          <img className="w-28" src={UnderTextBorder} />
        </div>
      </div>
    </>
  );
};

export default BestSellingHeaderCart;
