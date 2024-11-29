import React, { useEffect } from 'react';
import styles from './ContainerApplication.module.css'
import { getAllPages } from 'redux-tk/asyncthunk';
import { useDispatch } from 'react-redux';

const ContainerApplication = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPages());
    }, [])

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default ContainerApplication;