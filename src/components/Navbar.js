import React, { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navClass = `${classes.navbar} ${show ? classes.navbar_black : ""}`;
  return (
    <div className={navClass}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className={classes.logo}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Profile Logo"
        className={classes.profileLogo}
      />
    </div>
  );
};

export default Navbar;
