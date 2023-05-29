import React, { Component } from "react";

function useStatus() {
  let [count, setCount] = useState(0);
  let [showtext, setShowtext] = useState(false);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((count = count + 1));
          setShowtext(() => !showtext);
        }}
      >
        click
      </button>
      {showtext && <h2> "hi islam ahmed"</h2>}
    </>
  );
}

export default Component;
