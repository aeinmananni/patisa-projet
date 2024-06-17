import BasketIcons from "../../icon/basket";

type Props = {
  className?: string;
};

const BasketComponent = ({ className }: Props) => {
  return (
    <>
      <div
        className={`bg-orangeCustom flex justify-center items-center p-4 lg:p-2  rounded-lg lg:ml-3 ${className}`}
      >
        <BasketIcons />
      </div>
    </>
  );
};

export default BasketComponent;
