import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";

function DefaultTemplate({ children }) {
  return (
    <div>
      <div
        style={{
          width: 1728,
          height: 1154,
          backgroundColor: "#D9D9D9",
        }}
      >
        <Dashboard />
        {children}
      </div>
    </div>
  );
}

export default DefaultTemplate;
