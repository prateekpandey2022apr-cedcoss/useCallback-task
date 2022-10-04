import React, { memo, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function Parent() {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();

  return (
    <div>
      <Child1 val1={val1} setVal1={setVal1} /><br/>
      <Child2 val1={val1} val2={val2} setVal2={setVal2} /><br/>
      <Child3 val2={val2} />
    </div>
  );
}

export default memo(Parent);
