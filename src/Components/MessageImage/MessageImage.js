import React from "react";
import { styles } from "./MessageImageStyles";

function HomeMessageImage() {
  return (
    <div className="msgButton">
      <img
        style={styles.msgImg}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUA5YeBdewUyvoIWsi0PZ-lbjMOShR4SWGtpXZ53_X36HM7WHWS55sZJJ5HuGAl-7YZY&usqp=CAU"
        }
        alt=""
      />
    </div>
  );
}

export default HomeMessageImage;
