import RoundedDiv from "./components/rounded-div";
import { ServicesPatisaType } from "../../../models";

type Props = {
  services: ServicesPatisaType[];
};

const MainPatisaServices = ({ services }: Props) => {
  return (
    <>
      <div className="grid  gap-2 sm:gap-12  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  lg:justify-between xl:flex xl:justify-between    lg:px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              index === 4 && "col-span-2 sm:col-span-1 flex justify-center "
            }`}
          >
            <div className="group">
              <RoundedDiv className="group-hover:from-orangeCustom">
                <div className="flex  flex-col   items-center justify-center gap-2">
                  <img
                    className={` w-12 h-12 xl:w-20 xl:h-20  ${
                      index === 0 && "xl:pt-5"
                    }`}
                    width={service.width}
                    src={service.image}
                  />
                  <div className="flex flex-col gap-2 xl:gap-3 justify-center items-center group">
                    <h1 className="text-sm xl:text-xl group-hover:text-orangeCustom">
                      {service.title}
                    </h1>
                    <span className="text-justify text-garyCustom text-xs xl:text-sm">
                      {service.description}
                    </span>
                  </div>
                </div>
              </RoundedDiv>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPatisaServices;
