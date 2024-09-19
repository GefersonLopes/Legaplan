import React from "react";

import styles from "./Header.module.scss";
import logo from "../../assets/images/Shape.svg";

import Img from "next/image";
import headerCommon from "@/app/shared/common/Header.common";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" aria-label="Home">
        <nav className={styles.logo} aria-label="Main Navigation">
          <Img src={logo} alt="FocalPoint logo" />
          <span className={styles.brand}>{headerCommon.brand}</span>
        </nav>
      </a>
      <section className={styles.welcome}>
        <h1>{headerCommon.welcome}</h1>
      </section>
      <aside className={styles.date}>
        <time dateTime={headerCommon.date}>{headerCommon.today}</time>
      </aside>
    </header>
  );
};

export default Header;
