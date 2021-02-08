import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import CardComponent from "../Card";

import { Context } from "../../App";

import { Row, Col, Spin } from 'antd';


const CardList = () => {
    const data = useContext(Context)
    const [listBook, setListBook] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(data)
    // useEffect( () => {
    //     const fetchData = async () => {
    //         const data = await axios.get('http://localhost:3000/books');
    //
    //         return data;
    //     }
    //
    //     fetchData().then(data => {
    //         setLoading(false);
    //         setListBook([...listBook, ...data.data]);
    //     });
    //
    // }, [])

    return (
        <div className="site-card-wrapper">
            <Row gutter={[16, 16]}
                 type="flex"
                 style={{ alignItems: "center" }}
                 justify="center"
            >
                {loading ? <Spin /> : data.map((book) => {
                    return (
                        <Col span={5} key={book.ISBN} >
                            <CardComponent data={book} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
};

export default CardList;
