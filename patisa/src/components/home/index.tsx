import PatisaHead from "../patisa-head";
import SliderImageComponent from "../slider-imge-component";
import PatisaServices from "../patisa-services";
const Home = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto flex flex-col gap-2 pb-12">
        <PatisaHead />
        <SliderImageComponent />
        <PatisaServices />
      </div>
    </>
  );
};

export default Home;
