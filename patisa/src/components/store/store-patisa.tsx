/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { CategoryModalType } from "../models";
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

type PatisaStoreType = {
  stateCategoryesWomenDropDown: CategoryModalType[];
  stateCategoryMenDropDown: CategoryModalType[];
  stateCategoryesWomenBox: CategoryModalType[];
  stateCategoryMenBox: CategoryModalType[];
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
}));
