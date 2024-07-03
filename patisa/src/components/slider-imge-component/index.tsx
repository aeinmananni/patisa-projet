import Cart from "./components/cart";
import Slider from "./components/slider";
import menImage from "./components/image/men-image.png";
import womenImage from "./components/image/woman-image.png";
import testImage from "./components/image/hhh.jpg";
import patisaImage from "./components/image/tablo.jpg";
import { useWindowSize } from "react-use";

const SliderImageComponent = () => {
  const ImageItesm = [
    {
      id: 1,
      primaryId: "image1",
      imageUrl: patisaImage,
    },
    {
      id: 2,
      primaryId: "image2",
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      id: 3,
      primaryId: "image3",
      imageUrl: testImage,
    },
  ];

  const LinkItems = [
    { id: 1, link: "#image1" },
    { id: 2, link: "#image2" },
    { id: 3, link: "#image3" },
  ];
  const { width } = useWindowSize();
  return (
    <>
      <div className=" grid grid-cols-1 xl:flex w-full justify-center gap-4  items-center ">
        <Slider
          CursorItems={{
            items: ImageItesm,
            link: LinkItems,
          }}
        />
        <div className="flex xl:flex-col flex-row-reverse gap-2  w-full xl:w-1/2">
          <Cart
            styles={{
              parentDiv: "bg-colorDark !h-max",
              iconPatisaStyle:
                "top-1 left-1 md:left-0 md:top-0 sm:p-2 !w-4 sm:!w-10 md:!w-12",
              titleTextStyle: "!text-sm sm:!text-lg !w-max lg:!text-2xl",
              textChildStyle1: "!text-xs !w-max sm:!text-lg lg:!text-xl",
              textChildStyle2: "!text-xs sm:!text-lg",
              imageStyle: ` ${
                width < 400 ? "!hidden" : "flex"
              } !w-20 !h-36  sm:!h-full  sm:!w-44 `,
              buttonStyle: "!w-max scale-75 sm:scale-100",
              textButton: "!text-sm",
              childDivImageAndText: "!items-center",
            }}
            imageCart={menImage}
            titleText={"به وقت خوشتیپی!"}
            textChild="خرید انواع لباس مردانه"
          />
          <Cart
            imageCart={womenImage}
            titleText="دست خالی نمیری!"
            textChild="خرید انواع لباس زنانه"
            widthImage="w-52"
            styles={{
              parentDiv: "bg-cartColorWoman !h-max",
              childDivImageAndText: "flex-row-reverse !w-full  px-6 ",
              iconPatisaStyle:
                "bottom-1 left-1 md:left-0 md:bottom-0 sm:p-2 !w-4 sm:!w-10 md:!w-12",
              imageStyle: `  ${
                width < 400 ? "!hidden" : "flex"
              } !-ml-3 md:-mr-10 !w-20 !h-36  sm:!h-full  sm:!w-44  `,
              titleTextStyle:
                " !border-orangeCustom !text-sm sm:!text-lg !w-max lg:!text-2xl",
              textChildStyle1: "!text-xs !w-max sm:!text-lg lg:!text-xl",
              textChildStyle2: "!text-xs sm:!text-lg !w-max",
              buttonStyle: "!w-max scale-75 sm:scale-100 mb-2",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SliderImageComponent;
