import React, { Component } from 'react';
import styles from '../Css/Header.module.css';
import logo from '../images/logo.png';
import enFlag from '../images/england.png';
import irFlag from '../images/iran.png';
class Header extends Component {
    state = { 
        searchOk:false,
        searchVal:"",
        languageVal:"En",
        loginWindow:false,
        userNameVal:"",
        passwordVal:"",
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
                        <p>021-85700000</p> 
                    </span>
                    <span id={styles.login} className={this.state.loginWindow ? styles.loginOn : styles.loginOff} onClick={this.showLogin}>
                        <i></i>
                        <p>login / register</p>
                    </span>
                    <span id={styles.language}>
                        <img src={this.state.languageVal==="En" ? enFlag : irFlag} alt="Fa" />
                        <select onChange={this.languageOption} value={this.state.languageVal} id={styles.lanSelect}>
                            <option value="En">En</option>
                            <option value="Fa">Fa</option>
                        </select>
                    </span>    
                </div>
                <input onChange={this.searchValue} value={this.state.searchVal} className={this.state.searchOk ? styles.searchOpen : styles.searchClose } type="text" placeholder='Search...'/>
                <div id={styles.windowLogin} style={this.state.loginWindow ? {opacity:"1",visibility:"visible",transition:"all 600ms"} : {opacity:"0",visibility:"hidden",transition:"all 600ms"}}>
                    <div id={styles.boxLog}>
                        <p id={styles.titreLog}>login account</p>
                        <span>
                            <p className={styles.txtForme}>user name :</p>
                            <input onChange={this.userNameValue} value={this.state.userNameVal} placeholder='user name' type="text" />
                        </span>
                        <span>
                            <p className={styles.txtForme}>password :</p>
                            <input onChange={this.passwordValue} value={this.state.passwordVal} placeholder='password' type="password" />
                        </span>
                    </div>
                </div>
                <div id={styles.black} style={this.state.loginWindow ? {opacity:"1",transition:"all 500ms",visibility:"visible"} : {opacity:"0",transition:"all 500ms",visibility:"hidden"}}>

                </div>
            </div>
        );
    }
    showLogin = () => {
        this.setState({
            loginWindow:!this.state.loginWindow,
        })
    }
    searchHandel = () => {
        this.setState({
            searchOk : !this.state.searchOk,
        })
    }
    searchValue = (event) =>{
        this.setState({
            searchVal: event.target.value,
        })
    }
    languageOption =  (event) => {
        this.setState({
            languageVal:event.target.value,
        });
    }
    userNameValue = (event) =>{
        this.setState({
            userNameVal:event.target.value
        });
    }
    passwordValue =(event) =>{
        this.setState({
            passwordVal:event.target.value
        });
    }
}
 
export default Header;
