type Props = {
  onClick?: () => void;
  titleTextStyle?: string;
  titleText?: string;
  textChild?: string;
};

const CartInfoText = ({
  onClick,
  titleTextStyle,
  titleText,
  textChild,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 px-2">
        <h1
          className={` text-white h-max text-2xl border-b-2 ${titleTextStyle} border-colorPrimary py-2`}
        >
          {titleText}
        </h1>
        <div className="flex flex-col justify-evenly items-start gap-7 ">
          <div className="flex flex-col gap-1">
            <span className="text-white text-lg">{textChild}</span>
            <span className="text-white">با پاتیسا,لبخند بزنید:)</span>
          </div>
          <button
            className="border-2 border-white text-white py-1 px-3 rounded-lg"
            onClick={onClick}
          >
            خرید
          </button>
        </div>
      </div>
    </>
  );
};

export default CartInfoText;
