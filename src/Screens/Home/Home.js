import React from "react";
import AppText from "../../Components/AppText/AppText";
import DefaultTemplate from "../DefaultTemplate/DefaultTemplate";

function Home() {
  return (
    <DefaultTemplate>
      <div style={{ marginTop: -1075, marginLeft: 394 }}>
        <AppText
          color="#72AA83"
          fontStyle="normal"
          weight={600}
          size="28.5557px"
        >
          You currently have 3 requests
        </AppText>
      </div>
      <div
        className="smallDivShadow"
        style={{
          width: 1114,
          height: 226,
          backgroundColor: "#FFFFFF",
          marginLeft: 402,
          marginTop: 75,
        }}
      >
        <div
          style={{
            paddingLeft: 35,
            paddingTop: 50,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppText
            secondary={true}
            weight={700}
            size="29.3972px"
            color="#48AF78"
          >
            St Judes Hospital
          </AppText>
          <div style={{ paddingTop: 30 }}>
            <AppText secondary={true} size="16.93px" color="#959595">
              Sarasota,FL. 33178
            </AppText>
          </div>
        </div>
        <div className="dateBorder" style={{ height: 251.84, width: 55 }} />
        <div>
          <AppText>10 - 17</AppText>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default Home;
