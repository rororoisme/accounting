import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                React 練習專案
            </header>
            <main className={styles.main}>
                歡迎光臨我的頁面
            </main>
            <button className={styles.button}>
                <Link href="/accounting">
                    點此開始
                </Link>
            </button>
        </div>
    );
}
