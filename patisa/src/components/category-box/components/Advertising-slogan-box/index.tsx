import { useEffect, useState } from "react";

type Props = {
  title: string;
  description: string;
};

const AdvertisingSloganBox = ({ title, description }: Props) => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const listTitle = title.split(" ");
    setList(listTitle);
  }, []);

  return (
    <>
      <div className="w-1/2 h-40 bg-colorDark absolute top-0 rounded-xl flex flex-col justify-center items-center gap-5">
        <div className="flex ">
          {list.map((title, index) => (
            <>
              <h1
                className={`text-2xl ${
                  index === 1 ? "text-orangeCustom" : "text-white"
                }`}
              >
                {title}
              </h1>
            </>
          ))}
        </div>
        <p className="text-blueLigth">{description}</p>
      </div>
    </>
  );
};

export default AdvertisingSloganBox;
