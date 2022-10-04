import React, { memo } from "react";

function Child1(props) {
  console.log("c1");

  return (
    <div>
      Child1
      <input
        value={props.val1}
        onChange={(event) => props.setVal1(event.target.value)}
      />
    </div>
  );
}

export default memo(Child1);
