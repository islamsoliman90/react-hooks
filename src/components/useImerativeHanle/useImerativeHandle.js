import { useRef } from "react";
import Forwardref from "./forwardRef";
const Btn = () => {
  let refFor = useRef(null);
  return (
    <>
      <h3>islam</h3>
      <button onClick={() => refFor.current.toggaleFun()}>showtext</button>
      <Forwardref ref={refFor} />
    </>
  );
};
export default Btn;
