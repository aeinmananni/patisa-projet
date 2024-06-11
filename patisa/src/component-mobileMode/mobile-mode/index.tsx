import PatisaHeadMobile from "../patisa-head-mobile";
import PatisaMotto from "../../components/Batisa's motto";

const MobileMode = () => {
  return (
    <div className="h-screen overflow-y-auto  flex-col gap-9">
      <PatisaMotto textStyle="text-sm" />
      <div className="h-full w-full px-2">
        <PatisaHeadMobile />
      </div>
    </div>
  );
};

export default MobileMode;
