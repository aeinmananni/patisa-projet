import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  children: React.ReactNode;
  workingTimeText: string;
  phone: string;
  email: string;
  customDivClassName?: string;
};

const Communication = ({
  children,
  workingTimeText,
  phone,
  email,
  customDivClassName,
}: Props) => {
  return (
    <CustomDiv className={`lg:col-span-2  !border-none ${customDivClassName}`}>
      <div className="flex flex-col r w-full items-start  gap-4 h-full ">
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
