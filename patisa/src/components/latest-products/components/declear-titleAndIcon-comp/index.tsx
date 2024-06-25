type Props = {
  icon: string;
  title: string;
  parentClassName?: string;
};

const DeclaerTitleAndIconCompo = ({ icon, title, parentClassName }: Props) => {
  return (
    <>
      <div
        className={`flex  max-w  justify-center items-center gap-2   ${parentClassName}`}
      >
        <img src={icon} />
        <h1 className="text-sm lg:text-lg">{title}</h1>
      </div>
    </>
  );
};

export default DeclaerTitleAndIconCompo;
