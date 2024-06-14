import AdvertisingSloganBox from "../../components/category-box/components/Advertising-slogan-box";
import CategoriesComponent from "../../components/category-box/components/categoryes-component";
import { useStorePatisaManager } from "../../components/store/store-patisa";

const CategoryBoxMobile = () => {
  const { stateCategoryMenBox, stateCategoryesWomenBox } =
    useStorePatisaManager();
  return (
    <>
      <div className="relative flex flex-col py-20  justify-center items-center">
        <AdvertisingSloganBox
          title="با  پاتیســـا  مثل  فرشته ها شوید."
          description="طرح های بی نظیر با رنگ بندی متنوع، محصولاتی درجه یک و باکیفیت از برترین برندهای لباس"
          className="!w-80"
          decriptionsClassName="text-sm !w-full  text-center text-sm"
        />
        <div className="px-5 border w-full  bg-blueLigth rounded-xl py-24 ">
          <div className="flex flex-col gap-5  items-center w-full">
            <CategoriesComponent
              titleGender="زنانه"
              categoryies={stateCategoryesWomenBox}
              parentClassName="!flex flex-col !gap-9 !w-full items-center "
              iconsAndTextClassName="grid grid-cols-3 !gap-3  !max-w-full items-center justify-center"
            />
            <CategoriesComponent
              titleGender="مردانه"
              categoryies={stateCategoryMenBox}
              parentClassName="!flex flex-col !gap-9 !w-full items-center "
              iconsAndTextClassName="grid grid-cols-3 !gap-3  !max-w-full items-center justify-center"
              className="!bg-colorPrimary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBoxMobile;
