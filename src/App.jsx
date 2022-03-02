import React, { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header />
            <Banner />
            <Footer />
            </>
            
        );
    }
}
 
export default App;