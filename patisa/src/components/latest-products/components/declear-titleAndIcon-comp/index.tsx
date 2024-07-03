type Props = {
  icon: string;
  title: string;
  parentClassName?: string;
  textStyles?: string;
};

const DeclaerTitleAndIconCompo = ({
  icon,
  title,
  parentClassName,
  textStyles,
}: Props) => {
  return (
    <>
      <div
        className={`flex  max-w  justify-center items-center gap-2   ${parentClassName}`}
      >
        <img src={icon} />
        <h1 className={`text-sm xl:text- lg:text-lg  ${textStyles}`}>
          {title}
        </h1>
      </div>
    </>
  );
};

export default DeclaerTitleAndIconCompo;
