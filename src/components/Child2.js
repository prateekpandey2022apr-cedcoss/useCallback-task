import React, { memo } from "react";

function Child2(props) {
  console.log("c2");
  return (
    <div>
      Child2
      <input
        value={props.val2}
        onChange={(event) => props.setVal2(event.target.value)}
      />
      <div>{"component1 Value: " + props.val1}</div>
    </div>
  );
}

export default memo(Child2);
