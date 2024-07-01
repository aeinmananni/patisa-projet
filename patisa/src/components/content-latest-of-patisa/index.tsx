import HeadPatisaBorders from "../patisa-services/components/head-patisa-services";
import TextHeadPatisa from "../patisa-services/components/head-patisa-services/text-head-patisa";
import Manto from "./components/manto";
import PluseIcon from "./components/icons/pluse.svg";
import { useStorePatisaManager } from "../store/store-patisa";

const ContentLatestOfPatisa = () => {
  const { MantoArry } = useStorePatisaManager();
  return (
    <>
      <div className="flex flex-col h-full w-full md:mt-32 gap-20 px-6">
        <HeadPatisaBorders>
          <TextHeadPatisa titleOverBorder="آخرین مطالب" text="، پاتیسا مگ" />
        </HeadPatisaBorders>
        <div className="flex flex-col justify-center items-center gap-8  h-full w-full">
          <div className="w-full h-full  gap-x-24 gap-y-3 justify-items-center grid grid-cols-2 lg:flex sm:gap-5 ">
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
