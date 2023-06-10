import React from "react";
import AppText from "../../Components/AppText/AppText";
import DefaultTemplate from "../DefaultTemplate/DefaultTemplate";

function Home() {
  return (
    <DefaultTemplate>
      <div style={{}}>
        <AppText>You currently have 3 requests</AppText>
      </div>
    </DefaultTemplate>
  );
}

export default Home;
