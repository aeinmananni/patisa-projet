import { IoIosArrowBack } from "react-icons/io";

type Props = {
  ArrowRight?: boolean;
  styles?: string;
};

const CustomButton = ({ ArrowRight, styles }: Props) => {
  return (
    <>
      <div
        className={`w-5 h-5 p-1 bg-customColorGradient rounded-full flex justify-center items-center text-white ${styles}`}
      >
        {ArrowRight ? (
          <IoIosArrowBack className="rotate-180" />
        ) : (
          <IoIosArrowBack />
        )}
      </div>
    </>
  );
};

export default CustomButton;
