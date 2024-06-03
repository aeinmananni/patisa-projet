import RoundedDiv from "./components/rounded-div";
import { ServicesPatisaType } from "../../../models";

type Props = {
  services: ServicesPatisaType[];
};

const MainPatisaServices = ({ services }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center  px-3">
        {services.map((service, index) => (
          <RoundedDiv key={index}>
            <div className="flex  flex-col items-center justify-center gap-3">
              <img
                className={`${index === 0 && "pb-5"}`}
                width={service.width}
                src={service.image}
              />
              <div className="flex flex-col gap-3 justify-center items-center">
                <h1 className="text-xl">{service.title}</h1>
                <span className="text-justify text-garyCustom text-sm">
                  {service.description}
                </span>
              </div>
            </div>
          </RoundedDiv>
        ))}
      </div>
    </>
  );
};

export default MainPatisaServices;
