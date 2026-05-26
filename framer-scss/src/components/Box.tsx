import React from 'react';
import styles from './Box.module.scss';

interface BoxProps {
    title: string;
    description: string;
    className?: string;
}

const Box = ({ title, description, className = '' }: BoxProps) => {
    return (
        <div className={`${styles.box} ${className}`}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Box;
