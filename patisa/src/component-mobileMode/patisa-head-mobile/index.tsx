import NavbarMobile1 from "./components/navbar1-mobile";
import NavbarMobile2 from "./components/navbar2-mobile";
import { forwardRef } from "react";

const PatisaHeadMobile = forwardRef<HTMLDivElement>(
  (_props, ref): React.ReactNode => {
    return (
      <>
        <div ref={ref}></div>
        <NavbarMobile1 />
        <NavbarMobile2 />
      </>
    );
  }
);

export default PatisaHeadMobile;
