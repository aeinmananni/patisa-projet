import TypesOfSets from "./components/types-of-sets";
import Circle1 from "./components/icons/circle.svg";
import Circle2 from "./components/icons/circle2.svg";
import WomenImages from "./components/images/women-image2.png";
import men from "./components/images/men-image2.png";

const GenderSets = () => {
  return (
    <>
      <div className="w-full h-full  overflow-hidden pt-20 flex justify-center items-center gap-2 rounded-lg">
        <TypesOfSets
          withImage={400}
          text="ست مردانه"
          styles={{
            textStyles: "text-colorPrimary right-4",
            withParentRounded: 500,
            parentClassName: "bg-blueLigth",
            circleStyelsHaveBackGroundColor:
              "bg-DeressColor4 bottom-36 -right-3",
            circleHaveBorderColro: "-bottom-16 -right-28 border-y-colorPrimary",
            imagesStyels: "left-0",
          }}
          humenImages={men}
          CircleImages={Circle2}
        />
        <TypesOfSets
          withImage={375}
          text="ست زنانه"
          styles={{
            textStyles: "text-redLigth left-0",
            withParentRounded: 500,
            parentClassName: "bg-red-50",
            circleStyelsHaveBackGroundColor: "bg-redLigth -left-3 bottom-36",
            circleHaveBorderColro: "border-redLigth -bottom-24 -left-28",
          }}
          humenImages={WomenImages}
          CircleImages={Circle1}
        />
      </div>
    </>
  );
};

export default GenderSets;
