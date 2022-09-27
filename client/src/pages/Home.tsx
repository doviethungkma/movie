// import required modules
import HeroVideo from "../components/common/HeroVideo";
import Slider from "../components/common/Slider";

const Home = () => {
  return (
    <div className="-z-10 bg-background-color">
      <HeroVideo />
      <div className="w-full absolute top-full flex flex-col gap-10 mt-4 xl:top-[85%] z-40 px-8">
        <Slider title={"Thinh hanh"} class={"first-slider"} />
        <Slider title={"Mới nhất"} />
        <Slider title={"Sôi động cùng ngoại hạng anh"} />
        <Slider title={"Phim hay mỗi ngày"} />
        <Slider title={"Sắp phát sóng"} />
        <Slider title={"Siêu phẩm Disney"} />
      </div>
    </div>
  );
};

export default Home;
