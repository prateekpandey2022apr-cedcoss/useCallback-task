import React, { memo } from "react";

function Child3(props) {
  console.log("c3");
  return (
    <div>
      Child3
      <div> {"component2 Value: " + props.val2}</div>
    </div>
  );
}

export default memo(Child3);
