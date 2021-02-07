import React from 'react';
import { useHistory } from "react-router-dom";
import { Result, Button } from 'antd';

const PageNotFound = () => {
    const history = useHistory();

    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Сорри страницы не существует."
                extra={<Button type="primary" onClick={() => history.goBack()}>Назад</Button>}
            />
        </>
    );
};

export default PageNotFound;
