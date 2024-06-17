import SerachIcon from "../icons/search-icon";
type Props = {
  inputStyle?: string;
};

const SerachBox = ({ inputStyle }: Props) => {
  return (
    <div className="relative w-full lg:w-max">
      <SerachIcon />
      <input
        className={` bg-blueLigth w-full lg:w-96 h-14 lg:h-10  outline-none text-sm px-2 rounded-md ${inputStyle}`}
        placeholder="جست و جوی محصولات"
      />
    </div>
  );
};

export default SerachBox;
