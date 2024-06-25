type Props = {
  children?: React.ReactNode;
  className?: string;
};

const RoundedDiv = ({ children, className }: Props) => {
  return (
    <div
      className={`w-40 h-40  xl:w-52 xl:h-52 rounded-full flex justify-center  bg-gradient-to-t from-customColorGradient to-60% to-transparent relative ${className}`}
    >
      <div className="bg-white w-[9.2rem] h-[9.2rem] flex justify-center items-center  xl:w-[12rem] xl:h-[12rem] rounded-full">
        {children}
      </div>
    </div>
  );
};

export default RoundedDiv;
