import React from "react";
import { styles } from "./HomeStyles";
import AppText from "../../Components/AppText/AppText";

function FirstSection() {
  return (
    <div>
      <div style={styles.requestText}>
        <div style={{ paddingBottom: 10 }}>
          <AppText
            color="#72AA83"
            fontStyle="normal"
            weight={600}
            size="28.5557px"
          >
            You currently have 3 requests
          </AppText>
        </div>
      </div>
      <div className="smallDivShadow" style={styles.smallDiv}>
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
        <div style={styles.longBox} />
        <div className="recievedBoxRadius" style={styles.recievedBox} />
        <div style={styles.rightLine} />
        <div style={styles.recievedText}>
          <AppText color="#959595" secondary={true} size="16.93px">
            RECIEVED
          </AppText>
        </div>
        <div style={{ ...styles.recievedText, marginLeft: 470 }}>
          <AppText color="#959595" secondary={true} size="16.93px">
            NEGOTIATING
          </AppText>
        </div>
        <div style={{ ...styles.recievedText, marginLeft: 810 }}>
          <AppText color="#959595" secondary={true} size="16.93px">
            COMPLETED
          </AppText>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
