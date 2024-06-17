import saportIcon from "../../../icon/saport-icon.svg";

const Suported = () => {
  return (
    <>
      <div className=" items-center gap-2 hidden lg:flex">
        <div className="flex flex-col">
          <span className="text-colorPrimary flex flex-wrap-reverse">
            78 45 322 011
          </span>
          <span className="text-garyCustom text-sm">تماس با پشتیبانی</span>
        </div>
        <img src={saportIcon} alt="" />
      </div>
    </>
  );
};

export default Suported;
