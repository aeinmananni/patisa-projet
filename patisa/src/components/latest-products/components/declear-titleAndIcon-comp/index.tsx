type Props = {
  icon: string;
  title: string;
  parentClassName?: string;
};

const DeclaerTitleAndIconCompo = ({ icon, title, parentClassName }: Props) => {
  return (
    <>
      <div
        className={`flex justify-center items-center gap-2  ${parentClassName}`}
      >
        <img src={icon} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default DeclaerTitleAndIconCompo;
