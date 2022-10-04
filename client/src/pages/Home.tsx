// import required modules
import HeroVideo from "../components/common/HeroVideo";
import Slider from "../components/common/Slider";
import VideoPopup from "../components/common/VideoPopup";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const isShowVideoPopup = useSelector(
    (state: RootState) => state.common.isShowVideoPopup
  );

  console.log(isShowVideoPopup);
  return (
    <div className="-z-10 bg-background-color">
      <HeroVideo />
      <div className="w-full absolute top-full flex flex-col gap-10 mt-4 xl:top-[85%] z-20 px-8">
        <Slider title={"Thinh hanh"} class={"first-slider"} />
        <Slider title={"Mới nhất"} />
        <Slider title={"Sôi động cùng ngoại hạng anh"} />
        <Slider title={"Phim hay mỗi ngày"} />
        <Slider title={"Sắp phát sóng"} />
        <Slider title={"Siêu phẩm Disney"} />
      </div>
      {isShowVideoPopup.status && <VideoPopup />}
    </div>
  );
};

export default Home;
