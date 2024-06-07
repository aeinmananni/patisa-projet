import patisaIcons from "../../../slider-imge-component/components/icons/patisa-Icon.svg";

type Styles = {
  parentClassName?: string;
  iconAbsoluetClassName?: string;
  titleClassName?: string;
  shadowTitle?: string;
};

type Props = {
  title: string;
  imageAbsolutePosition?: string;
  imageBase?: string;
  styles?: Styles;
};

const AnimatonBox = ({
  title,
  imageAbsolutePosition,
  imageBase,
  styles,
}: Props) => {
  return (
    <>
      <div
        className={`bg-cartColorWoman w-32 px-2 h-full flex flex-col justify-between rounded-lg overflow-hidden ${styles?.parentClassName}`}
      >
        <div className=" text-brownCustom flex-col flex justify-center items-center py-3 gap-3 text-4xl">
          <img src={patisaIcons} />
          <div className="relative w-full flex justify-center items-center">
            <h1 className={styles?.titleClassName}>{title}</h1>
            <span
              className={`absolute  bottom-4 text-3xl opacity-50 z-10 ${styles?.shadowTitle}`}
            >
              {title}
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-2 relative bottom-9 items-center">
          <img
            className={`rotate-90 w-24 absolute bottom-20 left-14 ${styles?.iconAbsoluetClassName}`}
            src={imageAbsolutePosition}
          />
          <img className="w-24" src={imageBase} />
        </div>
      </div>
    </>
  );
};

export default AnimatonBox;
