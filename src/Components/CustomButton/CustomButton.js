import React from "react";

function CustomButton({
  title = "Lorem",
  p = 0,
  color = "white",
  m = 0,
  width = 150,
  height = 40,
  borderRadius = 0,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: p,
        color: color,
        margin: m,
        width: width,
        height: height,
        borderRadius: borderRadius,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h6 style={{ textAlign: "center" }}>{title}</h6>
    </div>
  );
}

export default CustomButton;
