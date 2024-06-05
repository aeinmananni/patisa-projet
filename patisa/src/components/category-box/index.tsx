import CategoriesComponent from "./components/categoryes-component";
import { useStorePatisaManager } from "../store/store-patisa";
import AdvertisingSloganBox from "./components/Advertising-slogan-box";

const CategoryBox = () => {
  const { stateCategoryesWomenBox, stateCategoryMenBox } =
    useStorePatisaManager();
  return (
    <>
      <div className="relative flex flex-col border-red-600 py-20 mt-20 justify-center items-center">
        <AdvertisingSloganBox
          title="با  پاتیســـا  مثل  فرشته ها شوید."
          description="طرح های بی نظیر با رنگ بندی متنوع، محصولاتی درجه یک و باکیفیت از برترین برندهای لباس"
        />
        <div className="px-16 border w-max  bg-blueLigth rounded-xl py-24">
          <div className="flex flex-col gap-12">
            <CategoriesComponent
              titleGender="زنانه"
              categoryies={stateCategoryesWomenBox}
            />
            <CategoriesComponent
              titleGender="مردانه"
              categoryies={stateCategoryMenBox}
              className="!bg-colorPrimary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
