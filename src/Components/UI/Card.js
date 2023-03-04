import React from "react";
import styles from './Card.module.css';

const Card = (props) => {

    const classes = `${styles.card} ${props.style}`

    return (
        <div className={classes} >{props.children}</div>
    );
}

export default Card;