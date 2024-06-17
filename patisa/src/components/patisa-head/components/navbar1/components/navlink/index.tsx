import { NavLink } from "react-router-dom";
import { useStorePatisaManager } from "../../../../../store/store-patisa";

const Navlink = () => {
  const { stateLinkArray } = useStorePatisaManager();
  return (
    <>
      <div className=" hidden lg:flex justify-center items-center gap-10 text-sm ">
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
    </>
  );
};

export default Navlink;
