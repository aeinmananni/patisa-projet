type Props = {
  children: React.ReactNode;
  className?: string;
};

const CustomDiv = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center   lg:border-l-2  items-center px-2 lg:px-12  border-gray-300 ${className} mt-8 md:mt-0`}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
