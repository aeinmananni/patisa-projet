import borderSvg from "../icons/border.svg";

type Props = {
  titleOverBorder: string;
  text: string;
};

const TextHeadPatisa = ({ titleOverBorder, text }: Props) => {
  const spiliter = titleOverBorder.split(" ");

  return (
    <>
      <div className="absolute bg-white py-1  text-2xl flex gap-2 px-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {spiliter.map((text, index) => (
              <div className="flex flex-col gap-2">
                <span className="text-servervicesColorText">{text}</span>
                {index === 0 && <img src={borderSvg} />}
              </div>
            ))}
          </div>
        </div>
        <span className="text-colorPrimary">{text}</span>
      </div>
    </>
  );
};

export default TextHeadPatisa;
