import DropDown from "./drop-down";
import { CategoryModalType } from "../../../../models";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useStorePatisaManager } from "../../../../store/store-patisa";

type Props = {
  stateCategoryesWomenDropDown: CategoryModalType[];
  stateCategoryMenDropDown: CategoryModalType[];
  parentClassName?: string;
};

const DropDownCustomize = ({
  stateCategoryesWomenDropDown,
  stateCategoryMenDropDown,
  parentClassName,
}: Props) => {
  const { setFocus } = useStorePatisaManager();
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setFocus(false);
  });
  return (
    <>
      <div
        ref={ref}
        className={`flex h-max flex-col justify-start items-start absolute rounded-lg right-7 z-20 bg-white ${parentClassName}`}
      >
        <DropDown
          gendercategories={stateCategoryesWomenDropDown}
          isRounded
          styles="px-2"
        />
        <DropDown gendercategories={stateCategoryMenDropDown} />
      </div>
    </>
  );
};

export default DropDownCustomize;
