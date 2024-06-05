import patisaIcons from "../../../slider-imge-component/components/icons/patisa-Icon.svg";

const AnimatonBox = () => {
  return (
    <>
      <div className=" bg-cartColorWoman w-max px-4 h-full flex flex-col justify-between rounded-lg overflow-hidden">
        <div className="shadowStyle text-brownCustom flex-col flex justify-center items-center py-3 gap-3 text-4xl">
          <img src={patisaIcons} />
          <h1>NEW</h1>
        </div>
        <div className=" flex flex-col gap-2 relative bottom-9 items-center">
          <img
            className="rotate-90 w-24 absolute bottom-20 left-20"
            src="https://s3-alpha-sig.figma.com/img/9f49/68a1/2725d6f06435626a3a2e86ad901fb166?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EFuwNwsbf0nvxVqjXX2r3dfyCKdx7H6iYMKDg0VRM5YCzDk0IxzyGohED6lq4kBfTbARuyCzAUo6327DcdYyzS6qIllrQj7U8pkT9q53mdhug6JaQrdp9yZ5-YZU~JLj8Yx8cj4jGOxUC9CXsPE5JuVfCTZS5lYh2Kp0skgpbRwtarY1fDWhcuHObdJXqkzNkdUYpH6Db54AVZvHJZnozqMNGbpGIVso-QjlCWOLzUER6plVOBHuWKlVJ9vrrCdel9AAZSKysC6-1rQzJoEJa0OzF4SXCiZ6KFU-yiSjOmxr4oc1GXpgllYp2z5pxExsUF7JyFwueRfYWIse3bB8xw__"
          />
          <img
            className=" w-24"
            src="https://s3-alpha-sig.figma.com/img/b215/00ba/c8fcde7b954e1f00ea2da5f6fa79c52c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqhQ0aOXoGphj1rsEvOP6kP6TaV3iK~jdpO9~gmBqoH1ct3kqAu2ZEV4OcccNXXGDywuNrKhTEd70wXyqcLux4z7Bixfv3hJCokXcJvgL4NEOpsWXwl0cPf~GtVwajrXSSTaruavj7RPXeKrFIjhWshOIhcCqi4DCapafNhqTO5LePJqtJTUP~g0NNtLjf88MsveoSE1m4fM~YRWeNm-C1ekhyCIRQK1J1GFT6Wiv9xMG7PogDiDF7hragzdcKjYgienIlWW7SQF1H2gIq07IlziSQDQuf9BXPlcETElK7SVjIpaDQQRV0Gz-dJfPUbTe5MB25G5gIA-0i~bG2~Vjw__"
          />
        </div>
      </div>
    </>
  );
};

export default AnimatonBox;
