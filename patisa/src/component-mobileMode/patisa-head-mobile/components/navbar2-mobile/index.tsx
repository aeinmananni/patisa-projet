import SerachBox from "../../../../components/patisa-head/components/navbar2/search-box";
import BasketComponent from "../../../../components/patisa-head/components/navbar2/basket-component";

const NavbarMobile2 = () => {
  return (
    <div className="flex justify-between items-center gap-6 p-2">
      <SerachBox inputStyle="!w-80 !h-12" />
      <BasketComponent className="!p-4" />
    </div>
  );
};

export default NavbarMobile2;
