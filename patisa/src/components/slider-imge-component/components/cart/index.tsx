import patisaIcon from "../icons/patisa-Icon.svg";

import CartInfoText from "./cart-element-text";

type Styles = {
  parentDiv?: string;
  iconPatisaStyle?: string;
  childDivImageAndText?: string;
  imageStyle?: string;
  titleTextStyle?: string;
  textChildStyle1?: string;
  textChildStyle2?: string;
  buttonStyle?: string;
  textButton?: string;
};

type Props = {
  styles?: Styles;
  imageCart?: string;
  onClick?: () => void;
  widthImage?: string;
  titleText: string;
  textChild?: string;
};

const Cart = ({
  styles,
  onClick,
  imageCart,
  widthImage,
  titleText,
  textChild,
}: Props) => {
  return (
    <div
      className={`rounded-l-xl w-full  overflow-hidden ${styles?.parentDiv}`}
    >
      <div
        className={`flex justify-between  items-center relative h-full  ${styles?.childDivImageAndText}`}
      >
        <CartInfoText
          onClick={onClick}
          titleTextStyle={styles?.titleTextStyle}
          titleText={titleText}
          textChild={textChild}
          styles={{
            textChildStyle1: styles?.textChildStyle1,
            textChildStyle2: styles?.textChildStyle2,
            buttonStyle: styles?.buttonStyle,
            textButton: styles?.textButton,
          }}
        />
        <img
          className={` ${
            widthImage ? widthImage : "w-44"
          }  h-full  rounded-l-xl ${styles?.imageStyle}`}
          src={imageCart}
          alt=""
        />
        <img
          className={`absolute ${styles?.iconPatisaStyle}`}
          src={patisaIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Cart;
