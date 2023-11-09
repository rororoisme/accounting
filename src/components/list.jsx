import React from 'react';
import styles from '../styles/list.module.css';
import Link from 'next/link';

function List({ transactions, calculateTotal, onDelete }) {

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {transactions.map((trans, index) => (
                    <li key={index} className={styles.li}>
                        <span className={`${styles.amount} ${trans.type === "收入" ? styles.income : styles.expense}`}>
                            {trans.type === "支出" ? "-" : ""}{trans.amount}
                        </span>
                        <span className={styles.description}>{trans.description}</span>
                        <button className={styles.del} onClick={() => onDelete(trans.id)}>刪除</button>
                    </li>
                ))}
            </ul>
            <p className={styles.total}>小計: {calculateTotal()}</p>
            <button className={styles.button}>
                <Link href="/">返回首頁</Link>
            </button>
        </div>
    );
}

export default List;
