import TextHeadPatisa from "./text-head-patisa";

const HeadPatisaServices = () => {
  return (
    <div className="w-full flex justify-center items-center relative gap-4">
      <div className="bg-gradient-to-r from-blue-500 to-gray-50 h-1 w-full" />
      <TextHeadPatisa />
      <div className="bg-gradient-to-r from-gray-50 to-red-500 w-full h-1" />
    </div>
  );
};

export default HeadPatisaServices;
