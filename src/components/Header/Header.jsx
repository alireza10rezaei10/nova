import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import FullPageMenu from "../FullPageMenu/FullPageMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <MenuIcon onClick={handleMenuToggle} /> {/* MenuIcon first */}
        <Link to="/">
          <Logo />
        </Link>{" "}
        {/* Logo second */}
      </header>
      <FullPageMenu isOpen={menuOpen} onClose={handleMenuToggle} />
    </>
  );
};

export default Header;
