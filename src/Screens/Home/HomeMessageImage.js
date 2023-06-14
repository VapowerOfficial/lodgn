import React from "react";

function HomeMessageImage() {
  return (
    <div className="msgButton">
      <img
        style={{
          mixBlendMode: "multiply",
          width: 100,
          height: 100,
          paddingTop: 15,
          paddingLeft: 15,
        }}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUA5YeBdewUyvoIWsi0PZ-lbjMOShR4SWGtpXZ53_X36HM7WHWS55sZJJ5HuGAl-7YZY&usqp=CAU"
        }
        alt=""
      />
    </div>
  );
}

export default HomeMessageImage;
