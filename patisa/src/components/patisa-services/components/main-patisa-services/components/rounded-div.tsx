type Props = {
  children?: React.ReactNode;
};

const RoundedDiv = ({ children }: Props) => {
  return (
    <div className="w-52 h-52 rounded-full flex justify-center bg-gradient-to-t from-gray-100 to-transparent relative ">
      <div className="bg-white w-[12rem] h-[12rem] rounded-full">
        {children}
      </div>
    </div>
  );
};

export default RoundedDiv;
