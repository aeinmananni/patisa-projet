type Props = {
  children: React.ReactNode;
  className?: string;
};

const CustomDiv = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center border-l-2  items-center px-12  border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
