import { useState } from "react";

type Props = {
  title: string;
  images: string;
  code: string;
  price: string;
  index?: number;
};

const BestSellingCartInfo = ({ title, images, code, price, index }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        onMouseOver={() => setHoveredIndex(index ?? null)}
        onMouseOut={() => setHoveredIndex(null)}
        className={`w-full flex justify-start gap-3 items-center border-b py-1 px-1 ${
          hoveredIndex === index && "shadow-lg"
        }`}
      >
        <img className="rounded-lg" width={50} height={50} src={images} />
        <div className="flex flex-col gap-3">
          <div className="flex gap-1">
            <span className="text-sm">{title}</span>
            <span className="text-sm">کد {code}</span>
          </div>
          <span className="text-lg text-orangeCustom">{price} تومان</span>
        </div>
      </div>
    </>
  );
};

export default BestSellingCartInfo;
