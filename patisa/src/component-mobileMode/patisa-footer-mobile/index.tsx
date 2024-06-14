import CustomDiv from "../../components/customaize-ul/custom-div-footer";
import TextTempIcon from "../../components/customaize-ul/text-temp-icon";
import Communication from "../../components/patisa-footer/components/communication";
import Description from "../../components/patisa-footer/components/description";
import E_CommerceSymbol from "../../components/patisa-footer/components/e-commerce-symbol";
import QuickAccess from "../../components/patisa-footer/components/quick-access";
import patisaIcon from "../../components/slider-imge-component/components/icons/patisa-Icon.svg";
import { useStorePatisaManager } from "../../components/store/store-patisa";
import thunder from "../../components/patisa-footer/components/icons/thunder.svg";
import phone from "../../components/patisa-footer/components/icons/phone.svg";
import Parvaneh from "../../components/patisa-footer/components/images/parvaneh.png";
import namad from "../../components/patisa-footer/components/images/namad-image.png";
import Symbol from "../../components/patisa-footer/components/icons/electronic-symbol.svg";
import mapIcon from "../../components/patisa-footer/components/icons/map-icon.svg";
import mapImage from "../../components/patisa-footer/components/images/map.png";

const PatisaFooterMobile = () => {
  const { stateLinkArray } = useStorePatisaManager();
  return (
    <>
      <div className="w-full h-max bg-blueLigth grid grid-cols-1 items-start  rounded-xl ">
        <Description
          customDivClassName=" !pb-5 border-none rounded-b-none"
          image={patisaIcon}
          title={`پاتیسا تولید کننده انواع لباس راحتی زنانه و دخترانه با بیش از 10
            سال سابقه تولید و پخش لباس زنانه در تمامی شهرهای ایران است.
            محصولات پاتیسا توسط تیم حرفه‌ای و باتجربه تولید شده و هم‌اکنون
            بدون واسطه با کمترین قیمت می‌توانید خرید کنید .`}
        />
        <E_CommerceSymbol parvanehImage={Parvaneh} symbolImage={namad}>
          <TextTempIcon title="نماد تجارت الکترونیک" icon={Symbol} />
        </E_CommerceSymbol>
        <QuickAccess
          customDivClassName="!items-start py-5 !border-none"
          linkArray={stateLinkArray}
        >
          <TextTempIcon icon={thunder} title={"دسترسی سریع"} />
        </QuickAccess>
        <Communication
          workingTimeText={"شنبه تا پنج شنبه از ساعت ۸:۳۰ الی ۲۴"}
          phone={"02155349214 , 09122718516"}
          email={"info[at]potisa.com"}
          customDivClassName="!items-start py-8"
        >
          <TextTempIcon icon={phone} title={"راه های ارتباطی"} />
        </Communication>

        <CustomDiv className=" !border-none">
          <div className="flex flex-col h-full gap-4">
            <TextTempIcon icon={mapIcon} title={"پاتیسا در نقشه"} />
            <a
              href="https://www.google.com/maps/place/%D9%BE%D9%88%D8%B4%D8%A7%DA%A9+%D9%BE%D8%A7%D8%AA%DB%8C%D8%B3%D8%A7%E2%80%AD/@36.539636,52.6795205,18.67z/data=!4m6!3m5!1s0x3f8f89deaf123665:0x7d79fc2c8a957bf3!8m2!3d36.5395989!4d52.6789683!16s%2Fg%2F11ng56f08s?entry=ttu"
              className=" h-52  overflow-hidden relative"
            >
              <img
                width={1000}
                className="object-fill relative -translate-y-44"
                src={mapImage}
              />
            </a>
          </div>
        </CustomDiv>
      </div>
    </>
  );
};

export default PatisaFooterMobile;
