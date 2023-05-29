import { forwardRef, useImperativeHandle, useState } from "react";

const Forwardref = forwardRef((props, ref) => {
  const [toggale, setToggale] = useState(false);
  useImperativeHandle(ref, () => ({
    toggaleFun() {
      setToggale(() => !toggale);
    },
  }));
  return <>{toggale && <h1>islam</h1>}</>;
});
export default Forwardref;
