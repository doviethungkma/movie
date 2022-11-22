// import required modules

import Hero from "../components/layout/Home/Hero";

const Home = () => {
  return (
    <div className="home absolute w-full top-0 left-0 -z-10 bg-background-color">
      <Hero />
      {/* <div className="absolute text-white bottom-20">
        <HomeMovieSlider />
      </div> */}
    </div>
  );
};

export default Home;
