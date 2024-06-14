/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import CropIcon from "../patisa-head/components/navbar2/icons/crap-icon";
import PantsIcon from "../patisa-head/components/navbar2/icons/pants-icon";
import PartnerIcon from "../patisa-head/components/navbar2/icons/partner-icon";
import ShomizIcon from "../patisa-head/components/navbar2/icons/shomiz-icon";
import ShortsIcon from "../patisa-head/components/navbar2/icons/shorts-icon";
import TShirtIcon from "../patisa-head/components/navbar2/icons/t-shirt-icon";
import TopWoman from "../patisa-head/components/navbar2/icons/top-woman-icon";
import WomanCategoryIcon from "../patisa-head/components/navbar2/icons/woman-categoryIcon";
import MenIcons from "../patisa-head/components/navbar2/icons/men-icons";
import PantsMenIcon from "../patisa-head/components/navbar2/icons/pants-men-icon";
import ShortsMenIcon from "../patisa-head/components/navbar2/icons/shorts-men-icon";
import TshirtMenIcon from "../patisa-head/components/navbar2/icons/t-shirt-men-icon";
import UnderWearIcon from "../patisa-head/components/navbar2/icons/under-wear";
import priceIcon from "../patisa-services/components/icons/quality-guarantee.svg";
import qualityGuarantee from "../patisa-services/components/icons/price-icon.svg";
import fastPost from "../patisa-services/components/icons/fast-post-icon.svg";
import OriginalityOfGoods from "../patisa-services/components/icons/originality-of-goods.svg";
import afterPurchaseService from "../patisa-services/components/icons/after-Purchase-Service.svg";
import PatisateModalImages from "../latest-products/components/images/latesProductImages.png";
import TShirt from "../Best-selling-products/components/images/T-shirt.png";
import Image1 from "../content-latest-of-patisa/components/images/latest-content.png";

import {
  LinkArrayType,
  ServicesPatisaType,
  CategoryModalType,
  LatestProductsCartType,
  BestSellingCartType,
  MantoType,
} from "../models";

type PatisaStoreType = {
  stateCategoryesWomenDropDown: CategoryModalType[];
  stateCategoryMenDropDown: CategoryModalType[];
  stateCategoryesWomenBox: CategoryModalType[];
  stateCategoryMenBox: CategoryModalType[];
  stateLinkArray: LinkArrayType[];
  statePatisaServises: ServicesPatisaType[];
  productsCartInfo: LatestProductsCartType[];
  BestSellingArray: BestSellingCartType[];
  MantoArry: MantoType[];
  focus: boolean;
  setFocus: (focus: boolean | ((c: boolean) => boolean)) => void;
};

export const useStorePatisaManager = create<PatisaStoreType>()((set, get) => ({
  stateCategoryesWomenDropDown: [
    {
      id: 1,
      title: "دسته بندی  های زنانه",
      icon: <WomanCategoryIcon width="18" height="24" />,
    },
    { id: 2, title: "تاپ", icon: <TopWoman width="12" height="18" /> },
    { id: 3, title: "تی - شرت", icon: <TShirtIcon width="18" height="20" /> },
    { id: 4, title: "شومیز", icon: <ShomizIcon width="16" height="16" /> },
    { id: 5, title: "شرتک", icon: <PartnerIcon width="16" height="14" /> },
    { id: 6, title: "کراپ", icon: <CropIcon width="16" height="18" /> },
    { id: 7, title: "شلوار", icon: <PantsIcon width="8" height="17" /> },
    { id: 8, title: "شلوارک", icon: <ShortsIcon width="16" height="14" /> },
  ],

  stateCategoryMenDropDown: [
    {
      id: 1,
      title: "دسته بندی های مردانه",
      icon: <MenIcons width="10" height="23" />,
    },
    { id: 2, title: "شلوارک", icon: <ShortsMenIcon width="18" height="18" /> },
    {
      id: 3,
      title: "تی - شرت",
      icon: <TshirtMenIcon width="20" height="20" />,
    },
    { id: 4, title: "شلوار", icon: <PantsMenIcon width="14" height="16" /> },
    {
      id: 5,
      title: "لباس زیر",
      icon: <UnderWearIcon width="20" height="20" />,
    },
  ],

  stateCategoryesWomenBox: [
    { id: 1, title: "تاپ", icon: <TopWoman width="36" height="38" /> },
    { id: 2, title: "تی - شرت", icon: <TShirtIcon width="36" height="38" /> },
    { id: 3, title: "شومیز", icon: <ShomizIcon width="36" height="38" /> },
    { id: 4, title: "شرتک", icon: <PartnerIcon width="36" height="38" /> },
    { id: 5, title: "کراپ", icon: <CropIcon width="36" height="38" /> },
    { id: 6, title: "شلوار", icon: <PantsIcon width="36" height="38" /> },
    { id: 7, title: "شلوارک", icon: <ShortsIcon width="36" height="38" /> },
  ],

  stateCategoryMenBox: [
    { id: 1, title: "شلوارک", icon: <ShortsMenIcon width="36" height="38" /> },
    {
      id: 2,
      title: "تی - شرت",
      icon: <TshirtMenIcon width="36" height="38" />,
    },
    { id: 3, title: "شلوار", icon: <PantsMenIcon width="36" height="38" /> },
    {
      id: 4,
      title: "لباس زیر",
      icon: <UnderWearIcon width="36" height="38" />,
    },
  ],
  stateLinkArray: [
    { id: 1, path: "/", linkName: "فروشگاه" },
    { id: 2, path: "/rack-orders", linkName: "پیگیری سفارشات" },
    { id: 3, path: "/purchase-guide", linkName: "راهنمای خرید" },
    { id: 4, path: "/weblog", linkName: "وبلاگ" },
    { id: 5, path: "/rules", linkName: "قوانین" },
    { id: 6, path: "/contact-us", linkName: "ارتباط با ما" },
  ],
  statePatisaServises: [
    {
      id: 1,
      image: qualityGuarantee,
      title: "تضمین بهترین قیمت",
      description:
        "با توجه به اینکه پاتیسا خود تولید کننده می باشد ، محصولات خود را با بهترین قیمت در اختیار شما میگذارد",
    },
    {
      id: 2,
      image: priceIcon,
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
  ],
  productsCartInfo: [
    {
      id: 1,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 2,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 3,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
    {
      id: 4,
      imageAddres: PatisateModalImages,
      dressTitle: "کت مازراتی",
      code: "13128",
      price: "2,090,000",
      sizes: ["XL", "41", "44", "48"],
      colors: ["#D62121", "#B3AD84", "#B79B89", "#16519F"],
    },
  ],
  BestSellingArray: [
    {
      id: 1,
      title: "کراپ زنانه و ورزشی",
      image:
        "https://s3-alpha-sig.figma.com/img/f496/f816/ee6395276ae0881910e7944605fff133?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRPuKN2ej56-jXZXOEZSXBZ7xPs314Fbaty6Z3TqTvIIZzDdpzHEs1i7l~iBr1Ho-wrMKbSjDvhlb85v9UZyvMjEbli0HolAfZRjgbNGtQdJNEUM~pmU0e3iUYy5KqwMjsQ-sOJt7W8fEoGkyff67TQLkXPvo75kJ2q5DFKHywIL4TwPX4zhDFMwOLdtBfdF1WxHK8EPLJUB0bO-uwAjnPo8BNH5oSaI-NtAOrvFTnB7o81ONtcINrg8lsejMPYSlzcr7MphAq4iayubeQzQAF5xLV7iJne9FIr0jHjUOosesj9KUbV91rgyKOeaTfJDzRsYCAp7Fo7mXk2PoOrDMQ__",
      CartInfo: [
        {
          id: 1,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 2,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 3,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 4,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
      ],
    },
    {
      id: 2,
      title: "کراپ زنانه و ورزشی",
      image:
        "https://s3-alpha-sig.figma.com/img/f496/f816/ee6395276ae0881910e7944605fff133?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRPuKN2ej56-jXZXOEZSXBZ7xPs314Fbaty6Z3TqTvIIZzDdpzHEs1i7l~iBr1Ho-wrMKbSjDvhlb85v9UZyvMjEbli0HolAfZRjgbNGtQdJNEUM~pmU0e3iUYy5KqwMjsQ-sOJt7W8fEoGkyff67TQLkXPvo75kJ2q5DFKHywIL4TwPX4zhDFMwOLdtBfdF1WxHK8EPLJUB0bO-uwAjnPo8BNH5oSaI-NtAOrvFTnB7o81ONtcINrg8lsejMPYSlzcr7MphAq4iayubeQzQAF5xLV7iJne9FIr0jHjUOosesj9KUbV91rgyKOeaTfJDzRsYCAp7Fo7mXk2PoOrDMQ__",
      CartInfo: [
        {
          id: 1,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 2,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 3,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 4,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
      ],
    },
    {
      id: 3,
      title: "کراپ زنانه و ورزشی",
      image:
        "https://s3-alpha-sig.figma.com/img/f496/f816/ee6395276ae0881910e7944605fff133?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRPuKN2ej56-jXZXOEZSXBZ7xPs314Fbaty6Z3TqTvIIZzDdpzHEs1i7l~iBr1Ho-wrMKbSjDvhlb85v9UZyvMjEbli0HolAfZRjgbNGtQdJNEUM~pmU0e3iUYy5KqwMjsQ-sOJt7W8fEoGkyff67TQLkXPvo75kJ2q5DFKHywIL4TwPX4zhDFMwOLdtBfdF1WxHK8EPLJUB0bO-uwAjnPo8BNH5oSaI-NtAOrvFTnB7o81ONtcINrg8lsejMPYSlzcr7MphAq4iayubeQzQAF5xLV7iJne9FIr0jHjUOosesj9KUbV91rgyKOeaTfJDzRsYCAp7Fo7mXk2PoOrDMQ__",
      CartInfo: [
        {
          id: 1,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 2,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 3,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
        {
          id: 4,
          dressTitle: "تیشرت کراپ کبریتی ",
          code: "12354",
          price: "۱۳۹,۹۰۰ ",
          imageAddres: TShirt,
        },
      ],
    },
  ],
  MantoArry: [
    {
      id: 1,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 2,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 3,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
    {
      id: 4,
      title: "مانتو تابستانه: مانتوهای مناسب برای فصل تابستان",
      image: Image1,
      date: "۲۳ اردیبهشت ۱۴۰۳",
    },
  ],
  focus: false,

  setFocus: (c: boolean | Function) => {
    set(() => ({
      focus: typeof c === "function" ? c(get().focus) : c,
    }));
  },
}));
