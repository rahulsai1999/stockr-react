import React, { useState } from "react";
import moment from "moment";

const Timer = props => {
  let initTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [time, setTime] = useState(initTime);
  setInterval(() => {
    let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    setTime(currentTime);
  }, 1000);

  return (
    <div>
      <p style={{color:'red',marginLeft:20,fontSize:18}}>{time}</p>
    </div>
  );
};

export default Timer;
