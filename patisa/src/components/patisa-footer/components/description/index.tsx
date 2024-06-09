import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  image: string;
  title: string;
};

const Description = ({ image, title }: Props) => {
  return (
    <CustomDiv className="col-span-2">
      <div className="flex flex-col w-full h-full items-center gap-3">
        <img width={50} src={image} />
        <span className="text-justify text-sm">{title}</span>
      </div>
    </CustomDiv>
  );
};

export default Description;
