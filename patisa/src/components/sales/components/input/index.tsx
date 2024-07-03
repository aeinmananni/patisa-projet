import serachIcon from "../icons/serach-icons.svg";
import falseSales from "../icons/flash-sales.svg";
type Props = {
  label: string;
};

const Input = ({ label }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full gap-1">
        <label>{label}</label>
        <div className="flex justify-between items-center border  gap-2 px-3 w-full cursor-pointer">
          <div className="flex justify-center items-center gap-2 py-3 px-1">
            <img src={serachIcon} />
            <span className="text-sm text-garyCustom">متن ورودی</span>
          </div>
          <img src={falseSales} className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default Input;
