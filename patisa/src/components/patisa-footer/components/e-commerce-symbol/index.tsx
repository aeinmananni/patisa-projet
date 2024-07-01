import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  children: React.ReactNode;
  parvanehImage: string;
  symbolImage: string;
};

const E_CommerceSymbol = ({ children, parvanehImage, symbolImage }: Props) => {
  return (
    <CustomDiv className="lg:col-span-2 ">
      <div className="flex flex-col gap-4 h-full w-full  md:mt-0 border">
        {children}
        <div className="flex md:gap-5 w-full">
          <img className="w-48 h-32" src={parvanehImage} />
          <img className="lg:w-36 lg:h-36" src={symbolImage} />
        </div>
      </div>
    </CustomDiv>
  );
};

export default E_CommerceSymbol;
