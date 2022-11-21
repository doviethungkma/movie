import React, { useEffect } from "react";
import LatestItem from "../components/layout/LatestItem";
import LatestReview from "../components/layout/LatestReview";
import LatestUser from "../components/layout/LatestUser";
import OverView from "../components/layout/OverView";
import TopItem from "../components/layout/TopItem";
import movieApi from "./../api/movieApi";

const Home = () => {
  return (
    <div className="w-full">
      <div className="title py-4 border-b border-[rgba(255,255,255,0.05)]">
        <h2 className="text-white tracking-widest text-[20px]">DASHBOARD</h2>
      </div>
      <OverView />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TopItem />
        <LatestItem />
        <LatestUser />
        <LatestReview />
      </div>
    </div>
  );
};

export default Home;
