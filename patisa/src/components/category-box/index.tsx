import CategoriesComponent from "./components/categoryes-component";
import { useStorePatisaManager } from "../store/store-patisa";
import AdvertisingSloganBox from "./components/Advertising-slogan-box";

const CategoryBox = () => {
  const { stateCategoryesWomenBox, stateCategoryMenBox } =
    useStorePatisaManager();
  return (
    <>
      <div className="relative  flex flex-col py-20 mt-20 justify-center items-center">
        <AdvertisingSloganBox
          title="با  پاتیســـا  مثل  فرشته ها شوید."
          description="طرح های بی نظیر با رنگ بندی متنوع، محصولاتی درجه یک و باکیفیت از برترین برندهای لباس"
        />
        <div className=" border w-full flex justify-center overflow-hidden bg-blueLigth rounded-xl pt-32 pb-12 ">
          <div className="flex flex-col justify-start items-start gap-12">
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
