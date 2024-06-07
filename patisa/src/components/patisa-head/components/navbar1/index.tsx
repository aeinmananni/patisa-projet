import { NavLink } from "react-router-dom";
import patisaIcon from "../icon/patisa-icon.svg";
import saportIcon from "../icon/saport-icon.svg";
import { LinkArrayType } from "../../../models";

const Navbar1 = () => {
  const LinkArray: LinkArrayType[] = [
    { id: 1, path: "/", linkName: "فروشگاه" },
    { id: 1, path: "/rack-orders", linkName: "پیگیری سفارشات" },
    { id: 1, path: "/purchase-guide", linkName: "راهنمای خرید" },
    { id: 1, path: "/weblog", linkName: "وبلاگ" },
    { id: 1, path: "/rules", linkName: "قوانین" },
    { id: 1, path: "/contact-us", linkName: "ارتباط با ما" },
  ];
  return (
    <div className="flex justify-between gap-16 items-center ">
      <img src={patisaIcon} alt="" />
      <div className="flex justify-center items-center gap-10 text-sm ">
        {LinkArray.map((list, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-colorPrimary border-b-2 border-orangeCustom p-3 duration-500"
                : "hover:text-orangeCustom duration-500"
            }
            key={index}
            to={list.path}
          >
            {list.linkName}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-colorPrimary">011 322 4578</span>
          <span className="text-garyCustom text-sm">تماس با پشتیبانی</span>
        </div>
        <img src={saportIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar1;
