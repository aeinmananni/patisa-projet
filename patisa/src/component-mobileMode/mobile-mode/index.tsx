import PatisaHeadMobile from "../patisa-head-mobile";
import PatisaMotto from "../../components/Batisa's motto";
import SliderImageComponentMobile from "../slider-image-compoenentMobile";

const MobileMode = () => {
  return (
    <div className="h-screen overflow-y-auto flex-col gap-9 sm:hidden ">
      <PatisaMotto textStyle="text-sm" />
      <div className="h-full w-full px-2">
        <PatisaHeadMobile />
        <SliderImageComponentMobile />
      </div>
    </div>
  );
};

export default MobileMode;
