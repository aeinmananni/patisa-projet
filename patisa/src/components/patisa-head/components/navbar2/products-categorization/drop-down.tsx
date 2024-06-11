import { CategoryModalType } from "../../../../models";

type Props = {
  gendercategories: CategoryModalType[];
  isRounded?: boolean;
  styles?: string;
};

const DropDown = ({ gendercategories, isRounded, styles }: Props) => {
  return (
    <>
      <div className="w-44 h-full">
        {gendercategories.map((woman, index) => (
          <div
            key={index}
            className={`flex justify-start items-center gap-1 py-2 px-1 text-sm border w-full group ${styles} ${
              index === 0 && `bg-blueLigth   ${isRounded && "rounded-t-lg"}`
            }  ${
              index > 0 ? "hover:border hover:border-b-colorPrimary2 " : ""
            } duration-500  `}
          >
            {woman.icon}
            <span
              className={`${
                index > 0 ? "group-hover:text-colorPrimary" : ""
              }  duration-500`}
            >
              {woman.title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropDown;
