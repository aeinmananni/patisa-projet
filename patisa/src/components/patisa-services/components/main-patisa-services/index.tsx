import RoundedDiv from "./components/rounded-div";
import { ServicesPatisaType } from "../../../models";

type Props = {
  services: ServicesPatisaType[];
};

const MainPatisaServices = ({ services }: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 xl:flex xl:justify-between items-center  px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${index === 4 && "col-span-2 flex justify-center"}`}
          >
            <RoundedDiv>
              <div className="flex  flex-col   items-center justify-center gap-2">
                <img
                  className={` w-12 h-12 xl:w-20 xl:h-20  ${
                    index === 0 && "xl:pt-5"
                  }`}
                  width={service.width}
                  src={service.image}
                />
                <div className="flex flex-col gap-2 xl:gap-3 justify-center items-center">
                  <h1 className="text-sm xl:text-xl">{service.title}</h1>
                  <span className="text-justify text-garyCustom text-xs xl:text-sm">
                    {service.description}
                  </span>
                </div>
              </div>
            </RoundedDiv>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPatisaServices;
