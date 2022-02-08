import React, { Component } from 'react';
import styles from '../Css/Header.module.css';
import logo from '../images/logo.png';
import enFlag from '../images/england.png';
import irFlag from '../images/iran.png';
class Header extends Component {
    state = { 
        searchOk:false,
     } 
    render() { 
        return (
            <div id={styles.header}>
                <div id={styles.topHeader}>
                    <span id={styles.logo}>
                        <img src={logo} alt="logo" />
                        <p> Store Website</p>
                    </span>
                    <span id={styles.menu}>
                        <ul>
                            <li>Location</li>
                            <li>Hot</li>
                            <li>option</li>
                            <li>option</li>
                            <li>option</li>
                        </ul>
                    </span>
                    <span onClick={this.searchHandel} id={styles.search}>
                        <i></i>
                    </span>
                    <span id={styles.connectUs}>
                        021-85700000
                    </span>
                    <span id={styles.language}>
                        <img src={enFlag} alt="En" />
                        <img className={styles.hide} src={irFlag} alt="Fa" />
                        <select id={styles.lanSelect}>
                            <option value="En">En</option>
                            <option value="Fa">Fa</option>
                        </select>
                    </span>    
                </div>
                <input  className={this.state.searchOk ? styles.searchOpen : styles.searchClose } type="text" placeholder='Search...'/>
            </div>
        );
    }
    searchHandel = () => {
        this.setState({
            searchOk : !this.state.searchOk,
        })
    }
}
 
export default Header;
