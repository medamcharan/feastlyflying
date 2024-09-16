import React, { useState } from 'react';
import './transactions.css';

interface Transaction {
  name: string;
  status: string;
  date: string;
  amount: number;
}

const transactionsData: Transaction[] = [
  { name: 'John Doe', status: 'Completed', date: '2024-09-15', amount: 150.00 },
  { name: 'Jane Smith', status: 'Pending', date: '2024-09-16', amount: 200.00 },
  { name: 'Alice Johnson', status: 'Failed', date: '2024-09-17', amount: 75.00 },
];

const Transactions: React.FC = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index === selectedRowIndex ? null : index);
  };

  return (
    <div className="transactions-container">
      <h2 className="transactions-title">Transactions</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction, index) => (
            <tr
              key={index}
              className={selectedRowIndex === index ? 'selected' : ''}
              onClick={() => handleRowClick(index)}
            >
              <td>{transaction.name}</td>
              <td className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</td>
              <td>{transaction.date}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
