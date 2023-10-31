import React from 'react';
import styles from '../styles/form.module.css';

function Form({ type, setType, amount, setAmount, description, setDescription, handleAddTransaction }) {
    return (
        <div className={styles.container}>
            <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
                <option value="收入">收入</option>
                <option value="支出">支出</option>
            </select>
            <input 
                type="text" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="數字"
                className={styles.number}
            />
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="消費內容"
                className={styles.content}
            />
            <button onClick={handleAddTransaction} className={styles.button}>新增紀錄</button>
        </div>
    );
}

export default Form;
