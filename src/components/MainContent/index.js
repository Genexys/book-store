import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import CardList from "../CardList";
import PageAbout from "../../pages/PageAbout";
import PageBook from "../../pages/PageBook";
import PagePromotion from "../../pages/PagePromotion";
import PageNotFound from "../../pages/PageNotFound";

import styles from './MainContent.module.css';

const { Content } = Layout;

const MainContent = () => {

    return (
        <Content className={styles.mainContent}>
            <Switch>
                <Route exact path="/" render={() => <CardList />} />
                <Route exact path="/about" render={() => <PageAbout />} />
                <Route exact path="/book/:id" render={() => <PageBook />} />
                <Route exact path="/promotion" render={() => <PagePromotion />} />
                <Route render={() => <PageNotFound />} />
            </Switch>
        </Content>
    );
};

export default MainContent;
