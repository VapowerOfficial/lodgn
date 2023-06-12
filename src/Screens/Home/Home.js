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
          <div style={{ marginTop: -10 }}>
            <AppText
              secondary={true}
              weight={700}
              size="29.3972px"
              color="#48AF78"
            >
              St Judes Hospital
            </AppText>
          </div>
          <div style={{ paddingTop: 30 }}>
            <AppText secondary={true} size="16.93px" color="#959595">
              Sarasota,FL. 33178
            </AppText>
          </div>
        </div>
        <div
          className="dateBorder"
          style={{
            height: 251.84,
            width: 55,
            marginLeft: 400,
            marginTop: -130,
            borderWidth: 0,
            borderBottomWidth: 1,
            borderTopWidth: 1,
          }}
        />
        <div style={{ marginLeft: 350, marginTop: -150 }}>
          <AppText secondary={true} color="#48AF78" weight={700}>
            10
          </AppText>
        </div>
        <div style={{ marginLeft: 420 }}>
          <AppText secondary={true} color="#48AF78" weight={700}>
            -
          </AppText>
        </div>
        <div style={{ marginLeft: 480 }}>
          <AppText secondary={true} color="#48AF78" weight={700}>
            17
          </AppText>
        </div>
        <div style={{ paddingTop: 30, marginLeft: 350 }}>
          <AppText secondary={true} size="16.93px" color="#959595">
            October
          </AppText>
        </div>
        <div style={{ paddingLeft: 470 }}>
          <AppText secondary={true} size="16.93px" color="#959595">
            December
          </AppText>
        </div>
        <div style={{ paddingLeft: 590, marginTop: -35 }}>
          <AppText secondary={true} size="29.64px" color="#48AF78" weight={700}>
            20 Rooms
          </AppText>
        </div>
        <div style={{ paddingLeft: 590, paddingTop: 35 }}>
          <AppText secondary={true} size="16.93px" color="#959595">
            10 Singles, 10 Doubles
          </AppText>
        </div>
        <div
          style={{
            borderWidth: 1,
            borderColor: "#959595",
            width: 1072,
            height: 48,
            border: "solid",
            boxSizing: "border-box",
            borderRadius: 24,
            marginLeft: 10,
            marginTop: 50,
            zIndex: 999,
          }}
        />
        <div
          className="recievedBoxRadius"
          style={{
            width: 387,
            height: 48,
            borderRightWidth: 1,
            borderColor: "",
            border: "solid",
            borderWidth: 0,
            marginLeft: 10,
            marginTop: -48,
            backgroundColor: "#FDF307",
          }}
        />
        <div
          style={{
            width: 387,
            height: 48,
            borderLeftWidth: 1,
            color: "#959595",
            border: "solid",
            borderWidth: 0,
            marginLeft: 660,
            marginTop: -48,
          }}
        />
        <div style={{ marginLeft: 30, marginTop: -33 }}>
          <AppText color="#959595" secondary={true} size="16.93px">
            RECIEVED
          </AppText>
        </div>
        <div style={{ marginLeft: 470, marginTop: -33 }}>
          <AppText color="#959595" secondary={true} size="16.93px">
            NEGOTIATING
          </AppText>
        </div>
        <div style={{ marginLeft: 810, marginTop: -33 }}>
          <AppText color="#959595" secondary={true} size="16.93px">
            COMPLETED
          </AppText>
        </div>
        <div
          className="bigDiv"
          style={{ width: 1114, height: 526, backgroundColor: "white" }}
        >
          <div
            style={{
              paddingLeft: 35,
              paddingTop: 50,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginTop: -10 }}>
              <AppText
                secondary={true}
                weight={700}
                size="29.3972px"
                color="#48AF78"
              >
                St Judes Hospital
              </AppText>
            </div>
            <div style={{ paddingTop: 30 }}>
              <AppText secondary={true} size="16.93px" color="#959595">
                Sarasota,FL. 33178
              </AppText>
            </div>
          </div>
          <div
            className="dateBorder"
            style={{
              height: 251.84,
              width: 55,
              marginLeft: 400,
              marginTop: -130,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderTopWidth: 1,
            }}
          />
          <div style={{ marginLeft: 350, marginTop: -150 }}>
            <AppText secondary={true} color="#48AF78" weight={700}>
              10
            </AppText>
          </div>
          <div style={{ marginLeft: 420 }}>
            <AppText secondary={true} color="#48AF78" weight={700}>
              -
            </AppText>
          </div>
          <div style={{ marginLeft: 480 }}>
            <AppText secondary={true} color="#48AF78" weight={700}>
              17
            </AppText>
          </div>
          <div style={{ paddingTop: 30, marginLeft: 350 }}>
            <AppText secondary={true} size="16.93px" color="#959595">
              October
            </AppText>
          </div>
          <div style={{ paddingLeft: 470 }}>
            <AppText secondary={true} size="16.93px" color="#959595">
              December
            </AppText>
          </div>
          <div style={{ paddingLeft: 590, marginTop: -35 }}>
            <AppText
              secondary={true}
              size="29.64px"
              color="#48AF78"
              weight={700}
            >
              20 Rooms
            </AppText>
          </div>
          <div style={{ paddingLeft: 590, paddingTop: 35 }}>
            <AppText secondary={true} size="16.93px" color="#959595">
              10 Singles, 10 Doubles
            </AppText>
          </div>
        </div>
        <div className="completedBox">
          <div style={{ paddingTop: 15, paddingLeft: 40 }}>
            <AppText size="16.1px" color="#FFFFFF" secondary={true}>
              COMPLETED
            </AppText>
          </div>
        </div>
        <div className="holidayBox"></div>
        <div className="holidayBoxBox" style={{ marginLeft: 1, marginTop: 1 }}>
          <div
            className="bookNowButton"
            style={{ marginTop: -815, marginLeft: -440 }}
          >
            <div style={{ paddingTop: 10, paddingLeft: 25 }}>
              <AppText color="#FFFFFF" size="17.59px" secondary={true}>
                Book now
              </AppText>
            </div>
          </div>
          <div style={{ paddingTop: 10, paddingLeft: 20 }}>
            <AppText color="#959595" size="17.5894px" secondary={true}>
              1.5 miles away from joblocation.
            </AppText>
            <div style={{ paddingTop: 30 }}>
              <AppText color="#959595" size="15.2321px">
                Singles:$120
              </AppText>
            </div>
            <div style={{ paddingTop: 15 }}>
              <AppText color="#959595" size="15.2321px">
                Doubles:$145
              </AppText>
            </div>
          </div>
        </div>
        <div className="holidayBox"></div>
        <div className="holidayBoxBox" style={{ marginLeft: 1, marginTop: 1 }}>
          <div
            className="bookNowButton"
            style={{ marginTop: -815, marginLeft: -440 }}
          >
            <div style={{ paddingTop: 10, paddingLeft: 25 }}>
              <AppText color="#FFFFFF" size="17.59px" secondary={true}>
                Book now
              </AppText>
            </div>
          </div>
          <div style={{ paddingTop: 10, paddingLeft: 20 }}>
            <AppText color="#959595" size="17.5894px" secondary={true}>
              1.5 miles away from joblocation.
            </AppText>
            <div style={{ paddingTop: 30 }}>
              <AppText color="#959595" size="15.2321px">
                Singles:$120
              </AppText>
            </div>
            <div style={{ paddingTop: 15 }}>
              <AppText color="#959595" size="15.2321px">
                Doubles:$145
              </AppText>
            </div>
          </div>
        </div>
        <div className="rareBox">
          <div style={{ paddingTop: 12, paddingLeft: 38 }}>
            <AppText color="#FFFFFF" size="13.3512px">
              Rare Find
            </AppText>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default Home;
