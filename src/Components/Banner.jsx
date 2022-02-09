import React, { Component } from 'react';
import styles from '../Css/Banner.module.css'
class Banner extends Component {
    state = {  } 
    render() { 
        return (
            <div id={styles.Banner}>
                <div id={styles.black}></div>
                <div>
                    <h2>online Shope</h2>
                    <h3> women 's dress</h3>
                </div>
            </div>
        );
    }
}
 
export default Banner;