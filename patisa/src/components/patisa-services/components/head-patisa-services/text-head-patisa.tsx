import borderSvg from "../icons/border.svg";
const TextHeadPatisa = () => {
  return (
    <>
      <div className="absolute bg-white py-1 px-3 text-2xl flex gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-servervicesColorText">خدمات</span>
          <img src={borderSvg} />
        </div>
        <span className="text-colorPrimary">پاتیسا</span>
      </div>
    </>
  );
};

export default TextHeadPatisa;
