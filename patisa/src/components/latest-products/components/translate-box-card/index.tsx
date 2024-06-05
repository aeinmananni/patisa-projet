const TranslateBoxCarts = () => {
  return (
    <>
      <div className="absolute bg-white  px-2 py-1 translate-y-12 bottom-2  duration-500 flex right-[33%] group-hover:translate-y-0 rounded-lg">
        {Array.from(Array(2)).map((_t, index) => (
          <div className={`w-6 h-6 ${index === 0 && "border-l-2"}`}></div>
        ))}
      </div>
    </>
  );
};

export default TranslateBoxCarts;
