type StyleCartInfo = {
  textChildStyle1?: string;
  textChildStyle2?: string;
  buttonStyle?: string;
  textButton?: string;
};

type Props = {
  onClick?: () => void;
  titleTextStyle?: string;
  titleText?: string;
  textChild?: string;
  styles?: StyleCartInfo;
};

const CartInfoText = ({
  onClick,
  titleTextStyle,
  titleText,
  textChild,
  styles,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 px-2">
        <h1
          className={` text-white h-max text-2xl border-b-2 ${titleTextStyle} border-colorPrimary py-2`}
        >
          {titleText}
        </h1>
        <div className="flex flex-col justify-evenly items-start gap-4 sm:gap-14 ">
          <div className="flex flex-col gap-1 h-full">
            <span className={`text-white text-lg ${styles?.textChildStyle1}`}>
              {textChild}
            </span>
            <span className={` text-white ${styles?.textChildStyle2}`}>
              با پاتیسا,لبخند بزنید:)
            </span>
          </div>
          <button
            className={`border-2 border-white text-white py-1 px-3 rounded-lg ${styles?.buttonStyle}`}
            onClick={onClick}
          >
            <span className={`${styles?.textButton}`}>خرید</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartInfoText;
