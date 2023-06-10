import React from "react";
import AppText from "../AppText/AppText";
import CustomButton from "../CustomButton/CustomButton";
import "../../Styles/Styles.css";
import { styles } from "./DashboardStyles";

export default function Dashboard() {
  return (
    <div className="dashboardshadow" style={styles.mainContainer}>
      <AppText
        secondary={true}
        fontStyle={"italic"}
        weight={800}
        size="35.4809px"
      >
        LODGN
      </AppText>
      <div style={styles.navButtonContainer}>
        <AppText
          secondary={false}
          size="22.8024px"
          color="#72AA83"
          weight={600}
        >
          Current request
        </AppText>
        <div style={{ ...styles.navButton, paddingTop: 75 }}>
          <AppText secondary={false} size="22.8024px" weight={600}>
            Ongoing stays
          </AppText>
        </div>
        <div style={styles.navButton}>
          <AppText secondary={false} size="22.8024px" weight={600}>
            Previous stays
          </AppText>
        </div>
        <div style={styles.navButton}>
          <AppText secondary={false} size="22.8024px" weight={600}>
            Reports
          </AppText>
        </div>
      </div>
      <div className="button" style={styles.customButton}>
        <CustomButton
          width={231}
          height={70}
          paddingTop={884}
          title="Log - Out"
          borderRadius={10}
        ></CustomButton>
      </div>
      <div style={{ paddingLeft: 70 }}>
        <AppText secondary={true} size={17.59}>
          Help-Desk:
        </AppText>
      </div>
      <div style={{ paddingTop: 30, paddingLeft: 50 }}>
        <AppText secondary={true} size={21.11}>
          786-874 9988
        </AppText>
      </div>
    </div>
  );
}
