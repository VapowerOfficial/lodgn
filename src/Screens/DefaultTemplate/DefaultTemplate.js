import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { styles } from "./DefaultTemplateStyles";

function DefaultTemplate({ children }) {
  return (
    <div>
      <div style={styles.dashBoardDiv}>
        <Dashboard />
        {children}
      </div>
    </div>
  );
}

export default DefaultTemplate;
