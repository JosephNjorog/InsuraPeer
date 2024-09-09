import React, { useState } from 'react';
import { processPayment } from '../../utils/api';

function PaymentProcessing() {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('usd');
    const [source, setSource] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await processPayment({ amount, currency, source, description });
            alert('Payment processed successfully!');
        } catch (error) {
            console.error('Failed to process payment', error);
        }
    };

    return (
        <div>
            <h2>Process Payment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Currency:
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        {/* Add more currencies as needed */}
                    </select>
                </label>
                <label>
                    Payment Source:
                    <input
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}

export default PaymentProcessing;
