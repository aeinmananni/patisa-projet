import Cart from "../../components/slider-imge-component/components/cart";
import Slider from "../../components/slider-imge-component/components/slider";
import menImage from "../../components/slider-imge-component/components/image/men-image.png";
import womenImage from "../../components/slider-imge-component/components/image/woman-image.png";

const SliderImageComponentMobile = () => {
  const sliderImageArray = [
    {
      id: 1,
      primaryId: "imageMobile1",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    },
    {
      id: 2,
      primaryId: "imageMobile2",
      imageUrl:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      id: 3,
      primaryId: "imageMobile3",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];
  const links = [
    { id: 1, link: "#imageMobile1" },
    { id: 2, link: "#imageMobile2" },
    { id: 3, link: "#imageMobile3" },
  ];
  return (
    <>
      <div className="flex flex-col pb-12">
        <Slider
          linkStyles="!p-1 "
          paddingIfIndexTrue="!px-5"
          CursorItems={{
            items: sliderImageArray,
            link: links,
          }}
        />
        <div className="flex w-full gap-1">
          <Cart
            imageCart={womenImage}
            titleText="دست خالی نمیری!"
            textChild="خرید انواع لباس زنانه"
            widthImage="w-32"
            styles={{
              parentDiv: "bg-cartColorWoman  h-36 w-32",
              childDivImageAndText: "flex-row-reverse !w-full  px-2 ",
              iconPatisaStyle: "bottom-4 w-6",
              imageStyle: " -mr-5 !w-20",
              titleTextStyle: "!border-orangeCustom text-sm py-1",
              textChildStyle1: "text-xs",
              textChildStyle2: "text-xs",
              textButton: "text-xs",
              buttonStyle: " w-[70%] scale-75 ",
            }}
          />
          <Cart
            styles={{
              parentDiv: "bg-colorDark h-36 w-32",
              iconPatisaStyle: "top-2 left-1 w-6",
              titleTextStyle: "text-sm py-1",
              textChildStyle1: "text-xs",
              textChildStyle2: "text-xs",
              imageStyle: "!w-20",
              textButton: "text-xs",
              buttonStyle: "w-[70%]  scale-75 ",
            }}
            imageCart={menImage}
            titleText={"به وقت خوشتیپی!"}
            textChild="خرید انواع لباس مردانه"
          />
        </div>
      </div>
    </>
  );
};

export default SliderImageComponentMobile;
