import PluseIcon from "../../components/content-latest-of-patisa/components/icons/pluse.svg";
import Manto from "../../components/content-latest-of-patisa/components/manto";
import HeadPatisaBorders from "../../components/patisa-services/components/head-patisa-services";
import TextHeadPatisa from "../../components/patisa-services/components/head-patisa-services/text-head-patisa";
import { useStorePatisaManager } from "../../components/store/store-patisa";

const ContentsLastOfPatisaMobile = () => {
  const { MantoArry } = useStorePatisaManager();
  return (
    <>
      <div className="flex flex-col h-full w-full mt-20 gap-12 ">
        <HeadPatisaBorders>
          <TextHeadPatisa titleOverBorder="آخرین مطالب" text="، پاتیسا مگ" />
        </HeadPatisaBorders>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="w-full h-max grid grid-cols-2  gap-5">
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

export default ContentsLastOfPatisaMobile;
