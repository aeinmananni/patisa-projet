type Props = {
  latestIcon: string;
  title: string;
};

const LatestTitleAndIconCompo = ({ latestIcon, title }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <img src={latestIcon} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default LatestTitleAndIconCompo;
