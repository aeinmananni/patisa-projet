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
        className={`flex   flex-col  justify-items-start justify-center sm:flex-row xl:justify-start gap-10 xl:items-start ${parentClassName}`}
      >
        <div className="w-full flex justify-center items-center">
          <div
            className={` bg-orangeCustom  h-28 w-56   flex justify-center items-center rounded-xl text-white ${className}`}
          >
            <div className=" flex flex-col items-center">
              <span>همه ی دسته بندی</span>
              <span>های {titleGender}</span>
            </div>
          </div>
        </div>
        <div
          className={`${iconsAndTextClassName} grid grid-cols-3 px-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:flex xl:justify-start xl:items-center gap-y-6 gap-x-12 lg:gap-12 xl:gap-14 w-full`}
        >
          {categoryies.map((cat, index) => (
            <>
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-2 "
              >
                <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center hover:scale-110 duration-300 hover:shadow-md">
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <h1 className="w-max">{cat.title}</h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesComponent;
