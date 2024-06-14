import { CategoryModalType } from "../../../models";

type Props = {
  titleGender: string;
  categoryies: CategoryModalType[];
  className?: string;
  parentClassName?: string;
  iconsAndTextClassName?: string;
};

const CategoriesComponent = ({
  titleGender,
  categoryies,
  className,
  parentClassName,
  iconsAndTextClassName,
}: Props) => {
  return (
    <>
      <div
        className={`flex justify-start gap-16 items-start ${parentClassName}`}
      >
        <div
          className={` bg-orangeCustom h-28 w-56 flex justify-center items-center rounded-xl text-white ${className}`}
        >
          <div className=" flex flex-col items-center">
            <span>همه ی دسته بندی</span>
            <span>های {titleGender}</span>
          </div>
        </div>
        <div
          className={`${iconsAndTextClassName} flex justify-start items-center gap-14 w-full`}
        >
          {categoryies.map((cat, index) => (
            <>
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-2"
              >
                <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center hover:scale-110 duration-300 hover:shadow-md">
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <h1>{cat.title}</h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesComponent;
