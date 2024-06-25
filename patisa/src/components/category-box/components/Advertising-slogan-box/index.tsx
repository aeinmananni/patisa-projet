import { useEffect, useState } from "react";

type Props = {
  title: string;
  description: string;
  className?: string;
  decriptionsClassName?: string;
};

const AdvertisingSloganBox = ({
  title,
  description,
  className,
  decriptionsClassName,
}: Props) => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const listTitle = title.split(" ");
    setList(listTitle);
  }, []);

  return (
    <>
      <div
        className={` w-72 sm:w-1/2 sm:px-2   h-40 bg-colorDark absolute top-0 rounded-xl flex flex-col justify-center items-center gap-5 ${className}`}
      >
        <div className="flex ">
          {list.map((title, index) => (
            <>
              <h1
                className={`text-xl xl:text-2xl ${
                  index === 1 ? "text-orangeCustom" : "text-white"
                }`}
              >
                {title}
              </h1>
            </>
          ))}
        </div>
        <p className={` text-blueLigth text-center ${decriptionsClassName}`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default AdvertisingSloganBox;
