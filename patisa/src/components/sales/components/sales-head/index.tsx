import tabloImages from "../images/tablo.jpg";

const SalesHead = () => {
  return (
    <>
      <div className=" w-full bottom-16 relative">
        <img
          className="object-cover  h-32 sm:h-64 w-full -z-10"
          src={tabloImages}
        />
        <div className="h-full absolute  flex justify-center items-center w-full z-20 bg-colorPrimary opacity-80 top-0 left-0">
          <span className="absolute top-20  sm:top-36 text-lg sm:text-2xl px-12  text-white">
            حراج آخر فصل
          </span>
        </div>
      </div>
    </>
  );
};

export default SalesHead;
