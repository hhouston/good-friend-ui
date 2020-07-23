import { useEffect } from "react";
import { debounce } from "lodash";

export default (callback) => {
  useEffect(() => {
    const handleWindowResize = debounce(callback, 100);
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [callback]);
};
