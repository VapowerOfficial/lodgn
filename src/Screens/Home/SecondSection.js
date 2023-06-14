import React from "react";
import AppText from "../../Components/AppText/AppText";
import { styles } from "./HomeStyles";

function SecondSection() {
  return (
    <div>
      <div
        className="bigDiv"
        style={{ width: 1114, height: 526, backgroundColor: "white" }}
      >
        <div style={styles.smallDivBigText}>
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
        <div className="dateBorder" style={styles.dateText} />
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
        <div style={styles.roomText}>
          <AppText secondary={true} size="29.64px" color="#48AF78" weight={700}>
            20 Rooms
          </AppText>
        </div>
        <div style={{ ...styles.roomText, paddingTop: 35 }}>
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
      <div className="holidayBox">
        <div style={styles.holidayInn}>
          <AppText
            color="#85C371"
            weight={400}
            fontStyle="italic"
            size="19.1247px"
          >
            Holiday Inn
          </AppText>
        </div>
      </div>
      <div className="rareBox">
        <div style={{ paddingTop: 12, paddingLeft: 35 }}>
          <AppText color="#FFFFFF" size="13.35px">
            Rare Find
          </AppText>
        </div>
      </div>
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
      <div className="holidayBox2">
        <div style={styles.holidayInn}>
          <AppText
            color="#85C371"
            weight={400}
            fontStyle="italic"
            size="19.1247px"
          >
            Holiday Inn
          </AppText>
        </div>
      </div>
      <div className="holidayBoxBox2">
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
      <div className="holidayBox3">
        <div style={styles.holidayInn}>
          <AppText
            color="#85C371"
            weight={400}
            fontStyle="italic"
            size="19.1247px"
          >
            Holiday Inn
          </AppText>
        </div>
      </div>
      <div className="holidayBoxBox3">
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
    </div>
  );
}

export default SecondSection;
