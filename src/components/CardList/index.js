import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col, Spin } from 'antd';
import CardComponent from "../Card";

const CardList = () => {
    const [listBook, setListBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {
            const data = await axios.get('http://localhost:3000/books');

            return data;
        }

        fetchData().then(data => {
            setLoading(false);
            setListBook([...listBook, ...data.data]);
        });

    }, [])

    return (
        <div className="site-card-wrapper">
            <Row gutter={[16, 16]}
                 type="flex"
                 style={{ alignItems: "center" }}
                 justify="center"
            >
                {loading ? <Spin /> : listBook.map((book) => {
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
