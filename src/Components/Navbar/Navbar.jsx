import React from 'react'
import styles from "./Navbar.module.css"
import vibek from "../../assets/vibek-modified.png";
import logo from "../../assets/favicon.ico"

const Navbar = () => {
  return (
    <div className={styles['navbar-main']}>
        <div className={styles['navbar-left']}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className={styles['navbar-right']}>
            <div className= {styles.navbar_links}>
                <a href="#home" className= {styles.navbar_links_items}>HOME</a>
                <a href="#home" className= {styles.navbar_links_items}>PROJECTS</a>
                <a href="#home" className= {styles.navbar_links_items}>BLOGS</a>
                <a href="#home" className= {styles.navbar_links_items}>ABOUT</a>
                <a href="#home" className= {styles.navbar_links_items}>CONTACT</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar