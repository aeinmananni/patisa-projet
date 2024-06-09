type Props = {
  title: string;
  image: string;
  date: string;
};

const Manto = ({ title, image, date }: Props) => {
  return (
    <div className=" w-max h-max flex flex-col justify-between bg-grayCustom2 gap-9 p-2 rounded-lg">
      <div className="flex flex-col gap-2">
        <img className="w-full h-full" src={image} />
        <span className="text-xl text-black ">{title}</span>
      </div>
      <span className="text-xs text-garyCustom">{date}</span>
    </div>
  );
};

export default Manto;
