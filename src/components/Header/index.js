import React from 'react';
import { Link } from "react-router-dom";

import { Layout, Menu, Row, Col, Typography  } from 'antd';
import styles from './Header.module.css'

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
    return (
        <Header>
            <Row wrap={false}>
                <Col flex="none" className={styles.logoWrapper}>
                    <Title className={styles.logo}>
                        <Link to="/" className={styles.logoLink}>BookStore</Link>
                    </Title>
                </Col>
                <Col flex="auto">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/">Каталог</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/promotion">Акции</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/about">О магазине</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    );
};

export default HeaderComponent;
