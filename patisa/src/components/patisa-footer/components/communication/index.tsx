import CustomDiv from "../../../customaize-ul/custom-div-footer";

type Props = {
  icon: string;
  title: string;
  workingTimeText: string;
  phone: string;
  email: string;
};

const Communication = ({
  icon,
  title,
  workingTimeText,
  phone,
  email,
}: Props) => {
  return (
    <CustomDiv className="col-span-2 !border-none">
      <div className="flex flex-col items-start gap-4 h-full">
        <div className="flex gap-1 text-sm">
          <img src={icon} />
          <span className="text-colorPrimary">{title}</span>
        </div>
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
