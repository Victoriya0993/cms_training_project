import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            {title}
        </div>
    );
};

export default Card;