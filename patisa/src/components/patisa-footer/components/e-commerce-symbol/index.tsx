import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  children: React.ReactNode;
  parvanehImage: string;
  symbolImage: string;
};

const E_CommerceSymbol = ({ children, parvanehImage, symbolImage }: Props) => {
  return (
    <CustomDiv className="col-span-2 ">
      <div className="flex flex-col gap-4 h-full">
        {children}
        <div className="flex gap-5">
          <img width={250} src={parvanehImage} />
          <img className="w-36 h-36" src={symbolImage} />
        </div>
      </div>
    </CustomDiv>
  );
};

export default E_CommerceSymbol;
