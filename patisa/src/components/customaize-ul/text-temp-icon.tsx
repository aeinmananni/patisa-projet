type Props = {
  icon: string;
  title: string;
};

const TextTempIcon = ({ icon, title }: Props) => {
  return (
    <div className="flex gap-1 text-sm ">
      <img src={icon} />
      <span className="text-colorPrimary">{title}</span>
    </div>
  );
};

export default TextTempIcon;
