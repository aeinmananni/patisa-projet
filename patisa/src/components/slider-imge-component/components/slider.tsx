/* eslint-disable prefer-const */
import { useState } from "react";

type CursorType = {
  items: { id: number; primaryId: string; imageUrl: string }[];
  link: { id: number; link: string }[];
};

type Props = {
  CursorItems: CursorType;
  style?: string;
  linkStyles?: string;
  paddingIfIndexTrue?: string;
};

const Slider = ({
  CursorItems,
  style,
  linkStyles,
  paddingIfIndexTrue,
}: Props) => {
  let [number, setNumber] = useState<number[]>([0]);

  const handelIndex = (name: { id: number; link: string }, index: number) => {
    const fild = CursorItems.link.findIndex((it) => it.link === name.link);
    if (number.includes(fild)) {
      const filter = number.filter((nm) => nm !== index);
      setNumber(filter);
    } else {
      const newArray = [index];
      setNumber(newArray);
    }
  };
  return (
    <>
      <div className={`relative w-full  lg:h-full ${style}`}>
        <div className="carousel h-full w-full rounded-xl sm:rounded-r-xl overflow-hidden">
          {CursorItems.items.map((it, index) => (
            <img
              key={index}
              id={it.primaryId}
              src={it.imageUrl}
              className=" carousel-item  lg:h-full  w-max xl:w-full border-2 "
            />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex bg-buttonDivBackgroundSlider w-max justify-center  py-2 gap-2 absolute bottom-5 sm:bottom-2 rounded-xl px-2">
            {CursorItems.link.map((lin, indexLink) => (
              <a
                key={indexLink}
                href={lin.link}
                onClick={() => handelIndex(lin, indexLink)}
                className={`bg-white p-2  ${
                  number.includes(indexLink) &&
                  `px-5  !bg-colorPrimary ${paddingIfIndexTrue}`
                }  rounded-full duration-500 ${linkStyles}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
