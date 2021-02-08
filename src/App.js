import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import MainContent from "./components/MainContent";
import reducer from "./store/reducers";

import styles from "./App.module.css";
import axios from "axios";

const defaultState = {
    books: [],
    loading: true,
}

export const Context = React.createContext();

const App = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [listBook, setListBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {
            const req = await axios.get('http://localhost:3000/books');
            const data = await req.data

            return data;
        }

        fetchData().then(data => {
            setLoading(false);
            setListBook([...listBook, ...data]);
        });
    }, [])

    return (
        <Router>
            <Context.Provider value={listBook}>
                <div className={styles.mainWrapper}>
                    <HeaderComponent/>
                    <MainContent/>
                    <FooterComponent/>
                </div>
            </Context.Provider>
        </Router>
    );
};

export default App;
