import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  children: React.ReactNode;
  workingTimeText: string;
  phone: string;
  email: string;
};

const Communication = ({ children, workingTimeText, phone, email }: Props) => {
  return (
    <CustomDiv className="col-span-2 !border-none">
      <div className="flex flex-col items-start gap-4 h-full">
        {children}
        <div className="text-sm flex flex-col items-start gap-4">
          <span>{workingTimeText}</span>
          <span>شماره تلفن: {phone}</span>
          <span>آدرس ایمیل: {email}</span>
        </div>
      </div>
    </CustomDiv>
  );
};

export default Communication;