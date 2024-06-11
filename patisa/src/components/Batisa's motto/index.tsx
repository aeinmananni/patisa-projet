type Props = {
  textStyle?: string;
};
const PatisaMotto = ({ textStyle }: Props) => {
  return (
    <>
      <div className="bg-redLigth w-full flex justify-center text-white h-10 items-center">
        <span className={textStyle}>
          با عضویت در پاتیسا ، اولین سفارش خود را ” رایگان” تحویل بگیرید{" "}
        </span>
      </div>
    </>
  );
};

export default PatisaMotto;
