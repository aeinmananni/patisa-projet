/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import PatisaMotto from "../Batisa's motto";
import PatisaHead from "../patisa-head";

import flash from "./icons/flash.svg";
import PatisaFooter from "../patisa-footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("divRef is null");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3  h-screen overflow-y-auto">
        <PatisaMotto />
        <div className="flex-col gap-12 px-2 md:px-12 flex">
          <PatisaHead ref={divRef} />
          <Outlet />
          <div className="  w-full  h-max  items-center flex flex-col mt-2 md:mt-32 gap-6">
            <div
              onClick={scrollToTop}
              className="scroll-to-top py-5 md:py-0 text-white bg-colorPrimary md:bg-transparent  md:text-colorPrimary w-full flex justify-center text-sm cursor-pointer"
            >
              <img src={flash} />
              <span>بازگشت به بالا</span>
            </div>

            <PatisaFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
