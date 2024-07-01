import CustomButton from "./components/custom-botton";

const LatestViewAllCompo = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-3 w-max">
          <CustomButton ArrowRight />
          <h1 className="text-sm lg:text-lg">مشاهده همه</h1>
          <CustomButton styles="!bg-colorPrimary" />
        </div>
      </div>
    </>
  );
};

export default LatestViewAllCompo;
