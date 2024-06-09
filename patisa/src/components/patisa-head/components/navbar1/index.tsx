import { NavLink } from "react-router-dom";
import patisaIcon from "../icon/patisa-icon.svg";
import saportIcon from "../icon/saport-icon.svg";
import { useStorePatisaManager } from "../../../store/store-patisa";

const Navbar1 = () => {
  const { stateLinkArray } = useStorePatisaManager();
  return (
    <div className="flex justify-between gap-16 items-center ">
      <img src={patisaIcon} alt="" />
      <div className="flex justify-center items-center gap-10 text-sm ">
        {stateLinkArray.map((list, index) => (
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
          <span className="text-colorPrimary flex flex-wrap-reverse">
            78 45 322 011
          </span>
          <span className="text-garyCustom text-sm">تماس با پشتیبانی</span>
        </div>
        <img src={saportIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar1;
