import HeadPatisaBorders from "./components/head-patisa-services";
import MainPatisaServices from "./components/main-patisa-services";
import TextHeadPatisa from "./components/head-patisa-services/text-head-patisa";
import { useStorePatisaManager } from "../store/store-patisa";

const PatisaServices = () => {
  const { statePatisaServises } = useStorePatisaManager();
  return (
    <>
      <div className="flex flex-col  gap-12 ">
        <HeadPatisaBorders>
          <TextHeadPatisa titleOverBorder="خدمات" text="پاتیسا" />
        </HeadPatisaBorders>
        <MainPatisaServices services={statePatisaServises} />
      </div>
    </>
  );
};

export default PatisaServices;
