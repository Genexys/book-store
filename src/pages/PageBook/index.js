import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Context} from "../../App";
import { Layout, Row, Col, Typography, Image, List, Divider, Spin } from 'antd';

const { Title } = Typography;

const PageBook = () => {
    const data = useContext(Context)
    const { id } = useParams();
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const currentBook = data.filter(book => {
            return book.ISBN === Number(id)
        })

        setBook(currentBook[0]);
        setLoading(false);

    }, []);


    if (loading) return <Spin />

    return (
        <Layout>
            <Title level={2}>
                Book
            </Title>

            <Row>
                <Col span={5}>
                    <Image
                        width={200}
                        src={book.image}
                    />
                </Col>
                <Col span={17}>
                    {/*<List*/}
                    {/*    header={<div>Header</div>}*/}
                    {/*    footer={<div>Footer</div>}*/}
                    {/*    bordered*/}
                    {/*    dataSource={book}*/}
                    {/*    renderItem={item => (*/}
                    {/*        <List.Item>*/}
                    {/*            <Typography.Text mark>[ITEM]</Typography.Text> {item}*/}
                    {/*        </List.Item>*/}
                    {/*    )}*/}
                    {/*/>*/}
                </Col>
            </Row>,
            
        </Layout>
    );
};

export default PageBook;
