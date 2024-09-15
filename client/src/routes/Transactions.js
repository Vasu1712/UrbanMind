import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gullak-425421.uc.r.appspot.com/gmail-data')
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  if (loading) {
    return (
        <div className="bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
            <div className="mt-6 w-full overflow-y-auto mb-4">
              <h4 className="text-3xl font-semibold text-gray-800 ">Transaction History</h4>
                <div className="spinner-container">
                    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            </div>
            <Footer />
        </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="mt-6 w-full overflow-y-auto mb-4">
        <h4 className="text-3xl font-semibold text-gray-800 mb-6">Transaction History</h4>
        <ul className="space-y-2">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
              <div className="flex-grow">
                <h5 className="font-md text-lg">{transaction.paid_to}</h5>
                <p className="text-sm text-gray-500">{formatDate(transaction.received_date)} | {transaction.received_time}</p>
              </div>
              <p className={`text-red-500`}>₹{transaction.amount}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Transactions;
