import React, { Component } from 'react';
import styles from '../Css/Header.module.css';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div id={styles.header}>
                <div id={styles.topHeader}>
                    <span id={styles.logo}></span>
                    <span id={styles.menu}></span>
                    <span id={styles.connectUs}></span>
                    <span id={styles.language}></span>    
                </div>
                <div id={styles.bottomHeader}>
                    <span id={styles.products}></span>
                    <span id={styles.search}></span>
                    <span id={styles.userInformation}>
                        <div id={styles.card}></div>
                        <div id={styles.Favorites}></div>
                        <div id={styles.account}></div>
                        <div id={styles.balance}></div>
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Header;
<>
    <div>

    </div>
    <div>

    </div>    
</>