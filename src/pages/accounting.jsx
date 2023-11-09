import React, { useState, useEffect } from 'react';
import Form from '../components/form.jsx';
import List from '../components/list.jsx';
import { db } from '../firebase/firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

function Accounting() {
    const [transactions, setTransactions] = useState([]);
    const [type, setType] = useState("收入");
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    // 讀取 firebase 數據
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot) => {
            const newTransactions = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setTransactions(newTransactions);
        });

        // 清除數據
        return () => unsubscribe();
    }, []);

    const handleAddTransaction = async () => {
        if (description.trim() === "") {
            alert("請填入消費內容");
            return;
        }
    
        // 定義 Firestore 中的資料 
        const transactionsData = collection(db, "transactions");
    
        try {
            // 新增交易到 Firestore 
            const docRef = await addDoc(transactionsData, {
                type,
                amount: parseFloat(amount),
                description,
            });
            console.log("Document written with ID: ", docRef.id);
    
            // 清空表單
            setAmount(0);
            setDescription('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    
    
    const handleDeleteTransaction = async (id) => {
        try {
            await deleteDoc(doc(db, "transactions", id));
            // 不需要更新狀態，因為 onSnapshot 會處理
        } catch (error) {
            console.error("Error remove: ", error);
        }
    };
    
    const calculateTotal = () => {
        return transactions.reduce((acc, trans) => {
            if (trans.type === "收入") {
                return acc + trans.amount;
            } else {
                return acc - trans.amount;
            }
        }, 0);
    };

    return (
        <div>
            <Form 
                type={type}
                setType={setType}
                amount={amount}
                setAmount={setAmount}
                description={description}
                setDescription={setDescription}
                handleAddTransaction={handleAddTransaction}
            />
            <List 
                transactions={transactions} 
                calculateTotal={calculateTotal}
                onDelete={handleDeleteTransaction}
            />
        </div>
    );
}

export default Accounting;
