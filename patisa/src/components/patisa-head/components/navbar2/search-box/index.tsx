import SerachIcon from "../icons/search-icon";
type Props = {
  inputStyle?: string;
};

const SerachBox = ({ inputStyle }: Props) => {
  return (
    <div className="relative">
      <SerachIcon />
      <input
        className={` bg-blueLigth w-96 h-10 outline-none text-sm px-2 rounded-md ${inputStyle}`}
        placeholder="جست و جوی محصولات"
      />
    </div>
  );
};

export default SerachBox;
