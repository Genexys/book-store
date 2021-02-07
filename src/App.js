import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import MainContent from "./components/MainContent";

import styles from "./App.module.css";

const App = () => {
    return (
        <Router>
            <div className={styles.mainWrapper}>
                <HeaderComponent/>
                <MainContent/>
                <FooterComponent/>
            </div>
        </Router>
    );
};

export default App;
