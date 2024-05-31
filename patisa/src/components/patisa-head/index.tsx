import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";

const PatisaHead = () => {
  return (
    <>
      <div className="flex flex-col  gap-6">
        <div className="bg-redLigth w-full flex justify-center text-white h-10 items-center">
          <span>
            با عضویت در پاتیسا ، اولین سفارش خود را ” رایگان” تحویل بگیرید{" "}
          </span>
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <Navbar1 />
          <Navbar2 />
        </div>
      </div>
    </>
  );
};

export default PatisaHead;
