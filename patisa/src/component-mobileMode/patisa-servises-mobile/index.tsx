import HeadPatisaBorders from "../../components/patisa-services/components/head-patisa-services";
import TextHeadPatisa from "../../components/patisa-services/components/head-patisa-services/text-head-patisa";
import MainPatisaServices from "../../components/patisa-services/components/main-patisa-services";
import { useStorePatisaManager } from "../../components/store/store-patisa";

const PatisaServisesMobile = () => {
  const { statePatisaServises } = useStorePatisaManager();
  return (
    <>
      <div className="flex flex-col gap-12 pb-16">
        <HeadPatisaBorders>
          <TextHeadPatisa titleOverBorder="خدمات" text="پاتیسا" />
        </HeadPatisaBorders>
        <MainPatisaServices services={statePatisaServises} />
      </div>
    </>
  );
};

export default PatisaServisesMobile;
