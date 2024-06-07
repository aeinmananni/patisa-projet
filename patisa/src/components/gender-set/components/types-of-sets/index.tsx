import Circle1 from "../icons/circle.svg";
import Circle2 from "../icons/circle2.svg";
import MenImage from "../images/men-image2.png";
import WomemImage from "../images/women-image2.png";
import patisaIcon from "../../../slider-imge-component/components/icons/patisa-Icon.svg";
type Props = {
  repalce?: boolean;
};

const TypesOfSets = ({ repalce }: Props) => {
  return (
    <>
      <div
        className={`w-full h-full flex justify-center items-center ${
          repalce ? "bg-blueLigth" : "bg-red-50"
        }`}
      >
        <div className="relative ">
          <img
            className={` w-12 absolute ${
              repalce ? "-left-12 top-0" : "-right-12 top-0"
            }`}
            src={patisaIcon}
          />
          <span
            className={`${
              repalce ? "text-colorPrimary right-0 " : "text-redLigth left-0 "
            } text-4xl absolute top-[45%] `}
          >
            {repalce ? "ست مردانه" : "ست زنانه"}
          </span>

          <img
            className={`absolute ${
              repalce ? "left-0" : "right-0"
            }  bottom-0 z-40`}
            width={repalce ? 400 : 375}
            src={repalce ? MenImage : WomemImage}
          />

          <div
            className={` ${
              repalce
                ? "-bottom-16 -right-28 border-y-colorPrimary"
                : "border-redLigth -bottom-24 -left-28"
            }  border  w-[90%] h-[90%]  absolute rounded-full z-10`}
          />
          <div
            className={`w-12 h-12 rounded-full absolute  ${
              repalce
                ? "bg-DeressColor4 bottom-36 -right-3"
                : "bg-redLigth -left-3 bottom-36"
            }`}
          />
          <img
            className="z-30 relative"
            width={500}
            src={repalce ? Circle2 : Circle1}
          />
        </div>
      </div>
    </>
  );
};

export default TypesOfSets;
