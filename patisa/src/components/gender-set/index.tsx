import TypesOfSets from "./components/types-of-sets";
import Circle1 from "./components/icons/circle.svg";
import Circle2 from "./components/icons/circle2.svg";
import WomenImages from "./components/images/women-image2.png";
import men from "./components/images/men-image2.png";

const GenderSets = () => {
  return (
    <>
      <div className="w-full h-full   overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-2 rounded-lg -mt-6 xl:mt-12">
        <TypesOfSets
          withImage={400}
          text="ست مردانه"
          styles={{
            textStyles: "text-colorPrimary right-8 !text-lg sm:!text-2xl",
            iconPatasiStyles: "!left-3 sm:!-left-16 lg:!-left-10",
            withParentRounded: 500,
            parentClassName: "bg-blueLigth",
            circleStyelsHaveBackGroundColor: `bg-DeressColor4 bottom-28 sm:bottom-36  -right-3   xl:-right-3 !h-7 !w-7 sm:!w-12 sm:!h-12  `,
            circleHaveBorderColro: "-bottom-16 -right-28 border-y-colorPrimary",
            imagesStyels: "left-0 !w-72 -bottom-6 sm:!w-96 ",
          }}
          humenImages={men}
          CircleImages={Circle2}
        />
        <TypesOfSets
          text="ست زنانه"
          styles={{
            textStyles: "text-redLigth left-4 sm:left-0 text-lg sm:!text-2xl ",
            withParentRounded: 500,
            parentClassName: "bg-red-50",
            circleStyelsHaveBackGroundColor:
              "bg-redLigth left-1 sm:!left-0 !bottom-28 sm:!bottom-36 !w-7 !h-7 sm:!w-12 sm:!h-12",
            circleHaveBorderColro: "border-redLigth -bottom-20 -left-28",
            imagesStyels: "w-72 sm:!w-96",
          }}
          humenImages={WomenImages}
          CircleImages={Circle1}
        />
      </div>
    </>
  );
};

export default GenderSets;
