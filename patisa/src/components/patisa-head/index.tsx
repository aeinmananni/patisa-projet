import { forwardRef } from "react";
import PatisaMotto from "../Batisa's motto";
import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";

const PatisaHead = forwardRef<HTMLDivElement>(
  (_props, ref): React.ReactNode => {
    return (
      <div ref={ref} className="flex flex-col gap-6">
        <PatisaMotto />
        <div className="flex flex-col gap-6 w-full">
          <Navbar1 />
          <Navbar2 />
        </div>
      </div>
    );
  }
);

export default PatisaHead;
