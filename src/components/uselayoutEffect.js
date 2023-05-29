import React, { useLayoutEffect, useEffect } from "react";

export default function LayoutEffect() {
  useEffect(() => {
    console.log("effect");
  }, []);
  useLayoutEffect(() => {
    console.log("layout effect");
  }, []);
  return <div> textInComponent </div>;
}
