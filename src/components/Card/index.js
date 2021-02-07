import React from 'react';
import {useHistory} from "react-router-dom";
import { Card } from 'antd';

import styles from './Card.module.css'

const { Meta } = Card;

const CardComponent = ({data: {ISBN, title, author, summary, image, price}}) => {
    const history = useHistory();

    const goToBook = (id) => {
        history.push(`book/${id}`)
    }

    return (
        <Card
            hoverable
            cover={<img alt="example" src={image} className={styles.img}/>}
            onClick={() => goToBook(ISBN)}
        >
            <Meta
                title={title}
                description={summary.slice(0, 50) + '...'}
            />
            <div className={styles.additional}>
                <p className={styles.price}>Price: <span className={styles.quantity}>{price.displayValue}&nbsp;{price.currency}</span></p>
                <p className={styles.author}>Author: <span className={`${styles.quantity} ${styles.authorName}`}>{author}</span></p>
            </div>
        </Card>
    );
};

export default CardComponent;
