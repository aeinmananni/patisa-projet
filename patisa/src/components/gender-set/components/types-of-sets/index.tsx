import patisaIcon from "../../../slider-imge-component/components/icons/patisa-Icon.svg";

type Styles = {
  parentClassName?: string;
  iconPatasiStyles?: string;
  imagesStyels?: string;
  textStyles?: string;
  withParentRounded?: number;
  circleStyelsHaveBackGroundColor?: string;
  circleHaveBorderColro?: string;
};
type Props = {
  repalce?: boolean;
  styles?: Styles;
  withImage?: number;
  text?: string;
  CircleImages?: string;
  humenImages?: string;
};

const TypesOfSets = ({
  styles,
  withImage,
  text,
  CircleImages,
  humenImages,
}: Props) => {
  return (
    <>
      <div
        className={`w-full h-max flex justify-center items-center py-6 rounded-lg overflow-hidden ${styles?.parentClassName} `}
      >
        <div className="relative">
          <img
            className={` w-12 absolute  ${styles?.iconPatasiStyles}`}
            src={patisaIcon}
          />

          <span
            className={`text-4xl absolute top-[45%] ${styles?.textStyles} `}
          >
            {text}
          </span>

          <img
            className={`absolute  bottom-0 z-40 ${styles?.imagesStyels}`}
            width={withImage}
            src={humenImages}
          />

          <div
            className={`  border  w-[90%] h-[90%]  absolute rounded-full z-10 ${styles?.circleHaveBorderColro}`}
          />
          <div
            className={`w-12 h-12 rounded-full absolute ${styles?.circleStyelsHaveBackGroundColor}`}
          />
          <img
            className="z-30 relative"
            width={styles?.withParentRounded}
            src={CircleImages}
          />
        </div>
      </div>
    </>
  );
};

export default TypesOfSets;
