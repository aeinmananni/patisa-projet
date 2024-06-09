import HeadPatisaBorders from "../patisa-services/components/head-patisa-services";
import TextHeadPatisa from "../patisa-services/components/head-patisa-services/text-head-patisa";
import { MantoType } from "../models";
import Manto from "./components/manto";
import Image1 from "./components/images/latest-content.png";
import PluseIcon from "./components/icons/pluse.svg";

const ContentLatestOfPatisa = () => {
  const MantoArry: MantoType[] = [
    {
      id: 1,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 2,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 3,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 4,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-full w-full mt-32 gap-20 ">
        <HeadPatisaBorders>
          <TextHeadPatisa titleOverBorder="آخرین مطالب" text="، پاتیسا مگ" />
        </HeadPatisaBorders>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="w-full h-max flex  gap-5">
            {MantoArry.map((manto) => (
              <Manto
                key={manto.id}
                title={manto.title}
                image={manto.image}
                date={manto.date}
              />
            ))}
          </div>

          <div className="flex gap-2 text-sm text-garyCustom cursor-pointer">
            <img className="w-4" src={PluseIcon} />
            <span>مشاهده بیشتر</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLatestOfPatisa;
