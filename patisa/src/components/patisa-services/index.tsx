import { ServicesPatisaType } from "../models";
import HeadPatisaServices from "./components/head-patisa-services";
import MainPatisaServices from "./components/main-patisa-services";
import priceIcon from "./components/icons/price-icon.svg";
import qualityGuarantee from "./components/icons/quality-guarantee.svg";
import fastPost from "./components/icons/fast-post-icon.svg";
import OriginalityOfGoods from "./components/icons/originality-of-goods.svg";
import afterPurchaseService from "./components/icons/after-Purchase-Service.svg";

const PatisaServices = () => {
  const ServicesPatisa: ServicesPatisaType[] = [
    {
      id: 1,
      image: priceIcon,
      title: "تضمین بهترین قیمت",
      description:
        "با توجه به اینکه پاتیسا خود تولید کننده می باشد ، محصولات خود را با بهترین قیمت در اختیار شما میگذارد",
    },
    {
      id: 2,
      image: qualityGuarantee,
      title: "تضمین کیفیت",
      description:
        "تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند.",
    },
    {
      id: 3,
      image: fastPost,
      title: "ارسال سریع",
      description:
        "با توجه به اینکه پاتیسا خود تولید کننده می باشد ، محصولات خود را با بهترین قیمت در اختیار شما میگذارد",
    },
    {
      id: 4,
      image: OriginalityOfGoods,
      title: "اصالت کالا",
      description:
        "تمامی کالا ها از برند پاتیسا و برند های معتبر تهیه و تولید شده هستند",
    },
    {
      id: 5,
      image: afterPurchaseService,
      title: "خدمات پس از خرید",
      description:
        "هر گونه سوال و یا ابهامی قبل و یا پس از خرید ، میتوانید با پشتیباتی تماس حاصل فرمایید",
    },
  ];
  return (
    <>
      <div className="flex flex-col  gap-8">
        <HeadPatisaServices />
        <MainPatisaServices services={ServicesPatisa} />
      </div>
    </>
  );
};

export default PatisaServices;
