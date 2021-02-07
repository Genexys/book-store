import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Layout, Row, Col, Typography, Image, List, Divider, Spin } from 'antd';
import axios from "axios";

const { Title } = Typography;

const PageBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchData = async () => {
            const fetchData = await axios.get('http://localhost:3000/books');
            const data = fetchData.data;

            return data;
        }

        fetchData().then(data => {
            setLoading(false);

            console.log(data)

            const itemBook = data.filter(book => {
                console.log(book.ISBN, Number(id))
                return book.ISBN === Number(id)
            })
            console.log(itemBook)
            setBook([...book, ...itemBook])
            console.log(book)
        }).catch((error) => {
            console.log(error)
        });

    }, [])

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
                        src={book[0].image}
                    />
                </Col>
                <Col span={17}>
                    {/*<List*/}
                    {/*    header={<div>Header</div>}*/}
                    {/*    footer={<div>Footer</div>}*/}
                    {/*    bordered*/}
                    {/*    dataSource={data}*/}
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
