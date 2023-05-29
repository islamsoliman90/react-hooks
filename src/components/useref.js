import { useRef, useState } from "react";
function Useref() {
  let input = useRef(null);
  let [name, setName] = useState("islam");
  let changname = () => setName(input.current.value);
  return (
    <>
      <h1>{name}</h1>
      <input ref={input} type="text" />
      <button onClick={changname}>change Name</button>
    </>
  );
}

export default Useref;
