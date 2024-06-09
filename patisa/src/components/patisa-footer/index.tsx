/* eslint-disable no-irregular-whitespace */
import patisaIcon from "../slider-imge-component/components/icons/patisa-Icon.svg";
import Description from "./components/description";
import { useStorePatisaManager } from "../store/store-patisa";
import QuickAccess from "./components/quick-access";
import thunder from "./components/icons/thunder.svg";
import Communication from "./components/communication";
import phone from "./components/icons/phone.svg";

const PatisaFooter = () => {
  const { stateLinkArray } = useStorePatisaManager();
  return (
    <>
      <div className="w-full h-max bg-blueLigth grid grid-cols-5 py-6 rounded-xl px-12">
        <Description
          image={patisaIcon}
          title={`پاتیسا تولید کننده انواع لباس راحتی زنانه و دخترانه با بیش از 10
            سال سابقه تولید و پخش لباس زنانه در تمامی شهرهای ایران است.
            محصولات پاتیسا توسط تیم حرفه‌ای و باتجربه تولید شده و هم‌اکنون
            بدون واسطه با کمترین قیمت می‌توانید خرید کنید .`}
        />
        <QuickAccess
          icons={thunder}
          title={"دسترسی سریع"}
          linkArray={stateLinkArray}
        />
        <Communication
          icon={phone}
          title={"راه های ارتباطی"}
          workingTimeText={"شنبه تا پنج شنبه از ساعت ۸:۳۰ الی ۲۴"}
          phone={"02155349214 , 09122718516"}
          email={"info[at]potisa.com"}
        />
      </div>
    </>
  );
};

export default PatisaFooter;
