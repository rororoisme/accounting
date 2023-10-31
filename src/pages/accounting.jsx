import React, { useState } from 'react';
import Form from '../components/form.jsx';
import List from '../components/list.jsx';

function Accounting() {
    const [transactions, setTransactions] = useState([]);
    const [type, setType] = useState("收入");
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    const handleAddTransaction = () => {
        if (description.trim() === "") {
            alert("請填入消費內容");
            return;
        }
    
        const id = Date.now();
        setTransactions([...transactions, { id, type, amount: parseFloat(amount), description }]);
        setAmount(0);
        setDescription('');
    };
    
    
    const handleDeleteTransaction = (id) => {
        const updatedTransactions = transactions.filter(trans => trans.id !== id);
        setTransactions(updatedTransactions);
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
