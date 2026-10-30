import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window back to the top whenever the route changes, so navigating
// to a new page doesn't leave the visitor halfway down the previous one.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
