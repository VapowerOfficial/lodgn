import React from "react";
import DefaultTemplate from "../DefaultTemplate/DefaultTemplate";
import HomeMessageImage from "../../Components/MessageImage/MessageImage";
import FirstSection from "../../Components/FirstSection/FirstSection";
import SecondSection from "../../Components/SecondSection/SecondSection";

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
