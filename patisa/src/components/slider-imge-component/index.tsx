import Cart from "./components/cart";
import Slider from "./components/slider";
import menImage from "./components/image/men-image.png";
import womenImage from "./components/image/woman-image.png";

const SliderImageComponent = () => {
  const ImageItesm = [
    {
      id: 1,
      primaryId: "image1",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
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
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];

  const LinkItems = [
    { id: 1, link: "#image1" },
    { id: 2, link: "#image2" },
    { id: 3, link: "#image3" },
  ];
  return (
    <>
      <div className="flex w-full justify-center gap-4  items-center">
        <Slider
          CursorItems={{
            items: ImageItesm,
            link: LinkItems,
          }}
        />
        <div className="flex flex-col gap-2 w-1/2">
          <Cart
            styles={{
              parentDiv: "bg-colorDark",
              iconPatisaStyle: "top-0 left-0 p-2",
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
              parentDiv: "bg-cartColorWoman",
              childDivImageAndText: "flex-row-reverse !w-full  px-2 ",
              iconPatisaStyle: "bottom-0 p-2",
              imageStyle: " -mr-10",
              titleTextStyle: "!border-orangeCustom",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SliderImageComponent;
