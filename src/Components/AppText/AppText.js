import React from "react";

function AppText({
  secondary,
  weight = 500,
  fontStyle = "normal",
  size = "22px",
  color = "black",
  spacing = -0.02,
  position = "absolute",
  children,
}) {
  return (
    <div
      style={{
        fontFamily: secondary ? "Lato" : "Poppins",
        fontWeight: weight,
        fontStyle: fontStyle,
        fontSize: size,
        color: color,
        letterSpacing: spacing,
        position: position,
      }}
    >
      {children}
    </div>
  );
}

export default AppText;
