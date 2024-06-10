/* eslint-disable no-irregular-whitespace */
import patisaIcon from "../slider-imge-component/components/icons/patisa-Icon.svg";
import Description from "./components/description";
import { useStorePatisaManager } from "../store/store-patisa";
import QuickAccess from "./components/quick-access";
import thunder from "./components/icons/thunder.svg";
import Communication from "./components/communication";
import E_CommerceSymbol from "./components/e-commerce-symbol";
import phone from "./components/icons/phone.svg";
import TextTempIcon from "../customaize-ul/text-temp-icon";
import Symbol from "./components/icons/electronic-symbol.svg";
import Parvaneh from "./components/images/parvaneh.png";
import namad from "./components/images/namad-image.png";
import CustomDiv from "../customaize-ul/custom-div-footer";
import mapIcon from "./components/icons/map-icon.svg";
import mapImage from "./components/images/map.png";

const PatisaFooter = () => {
  const { stateLinkArray } = useStorePatisaManager();
  return (
    <>
      <div className="w-full h-max bg-blueLigth grid grid-cols-5 gap-y-14 py-6 rounded-xl px-12">
        <Description
          image={patisaIcon}
          title={`پاتیسا تولید کننده انواع لباس راحتی زنانه و دخترانه با بیش از 10
            سال سابقه تولید و پخش لباس زنانه در تمامی شهرهای ایران است.
            محصولات پاتیسا توسط تیم حرفه‌ای و باتجربه تولید شده و هم‌اکنون
            بدون واسطه با کمترین قیمت می‌توانید خرید کنید .`}
        />
        <QuickAccess linkArray={stateLinkArray}>
          <TextTempIcon icon={thunder} title={"دسترسی سریع"} />
        </QuickAccess>
        <Communication
          workingTimeText={"شنبه تا پنج شنبه از ساعت ۸:۳۰ الی ۲۴"}
          phone={"02155349214 , 09122718516"}
          email={"info[at]potisa.com"}
        >
          <TextTempIcon icon={phone} title={"راه های ارتباطی"} />
        </Communication>
        <E_CommerceSymbol parvanehImage={Parvaneh} symbolImage={namad}>
          <TextTempIcon title="نماد تجارت الکترونیک" icon={Symbol} />
        </E_CommerceSymbol>
        <CustomDiv className="col-span-3 !border-none">
          <div className="flex flex-col h-full gap-4">
            <TextTempIcon icon={mapIcon} title={"پاتیسا در نقشه"} />
            <div className=" h-52  overflow-hidden relative">
              <img
                width={1000}
                className="object-fill relative -translate-y-44"
                src={mapImage}
              />
            </div>
          </div>
        </CustomDiv>
      </div>
    </>
  );
};

export default PatisaFooter;
