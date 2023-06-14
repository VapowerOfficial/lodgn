import React from "react";
import DefaultTemplate from "../DefaultTemplate/DefaultTemplate";
import HomeMessageImage from "./HomeMessageImage";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function Home() {
  return (
    <DefaultTemplate>
      <FirstSection />
      <SecondSection />
      <HomeMessageImage />
    </DefaultTemplate>
  );
}

export default Home;
