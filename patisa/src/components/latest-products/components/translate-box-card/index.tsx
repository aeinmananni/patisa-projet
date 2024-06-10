import magnifire from "../icons/magnifier.svg";
import love from "../icons/love-icon.svg";

const TranslateBoxCarts = () => {
  return (
    <>
      <div className="absolute  bg-white  px-2 py-1 translate-y-12 bottom-2  duration-500 flex   right-[33%] group-hover:translate-y-0 rounded-sm">
        <div className="bg-white flex gap-2">
          {Array.from(Array(2)).map((_t, index) => (
            <div className={` ${index === 0 && "border-l-2 pl-2"}`}>
              {index === 0 ? <img src={magnifire} /> : <img src={love} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TranslateBoxCarts;
