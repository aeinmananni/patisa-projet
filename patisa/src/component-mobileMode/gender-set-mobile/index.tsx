import TypesOfSets from "../../components/gender-set/components/types-of-sets";
import Circle1 from "../../components/gender-set/components/icons/circle2.svg";
import Circle2 from "../../components/gender-set/components/icons/circle.svg";
import men from "../../components/gender-set/components/images/men-image2.png";
import women from "../../components/gender-set/components/images/women-image2.png";
const GenderSetMobile = () => {
  return (
    <>
      <div className="overflow-hidden  grid grid-cols-1 mt-72 gap-4">
        <TypesOfSets
          repalce
          styles={{
            imagesStyels: "left-0",
            iconPatasiStyles: "!-left-3",
            textStyles: "text-colorPrimary right-4 !text-3xl",
            withParentRounded: 400,
            parentClassName: "py-14 bg-blueLigth",
            circleStyelsHaveBackGroundColor:
              "bg-DeressColor4 bottom-32 -right-3 !w-9 !h-9",
            circleHaveBorderColro: "-bottom-16 -right-28 border-y-colorPrimary",
          }}
          withImage={320}
          text="ست مردانه"
          CircleImages={Circle1}
          humenImages={men}
        />
        <TypesOfSets
          repalce
          styles={{
            iconPatasiStyles: "!-left-3",
            textStyles: "text-redLigth left-0 !text-3xl",
            withParentRounded: 400,
            parentClassName: "py-14 bg-red-50",
            circleStyelsHaveBackGroundColor:
              "bg-redLigth -left-3 bottom-32 !w-9 !h-9",
            circleHaveBorderColro: "border-redLigth -bottom-24 -left-28",
          }}
          withImage={310}
          text="ست زنانه"
          CircleImages={Circle2}
          humenImages={women}
        />
      </div>
    </>
  );
};

export default GenderSetMobile;
