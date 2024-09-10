import React, { useState } from 'react';
import { addPaymentMethod, updatePaymentMethod, removePaymentMethod } from '../../utils/api';

function ManagePaymentMethods() {
    const [paymentMethodId, setPaymentMethodId] = useState('');
    const [updateId, setUpdateId] = useState('');
    const [removeId, setRemoveId] = useState('');

    const handleAdd = async () => {
        try {
            await addPaymentMethod({ paymentMethodId });
            alert('Payment method added successfully!');
        } catch (error) {
            console.error('Failed to add payment method', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await updatePaymentMethod(updateId, { paymentMethodId });
            alert('Payment method updated successfully!');
        } catch (error) {
            console.error('Failed to update payment method', error);
        }
    };

    const handleRemove = async () => {
        try {
            await removePaymentMethod(removeId);
            alert('Payment method removed successfully!');
        } catch (error) {
            console.error('Failed to remove payment method', error);
        }
    };

    return (
        <div>
            <h2>Manage Payment Methods</h2>
            <div>
                <h3>Add Payment Method</h3>
                <input
                    type="text"
                    value={paymentMethodId}
                    onChange={(e) => setPaymentMethodId(e.target.value)}
                    placeholder="Payment Method ID"
                />
                <button onClick={handleAdd}>Add Payment Method</button>
            </div>
            <div>
                <h3>Update Payment Method</h3>
                <input
                    type="text"
                    value={updateId}
                    onChange={(e) => setUpdateId(e.target.value)}
                    placeholder="Payment Method ID to Update"
                />
                <input
                    type="text"
                    value={paymentMethodId}
                    onChange={(e) => setPaymentMethodId(e.target.value)}
                    placeholder="New Payment Method ID"
                />
                <button onClick={handleUpdate}>Update Payment Method</button>
            </div>
            <div>
                <h3>Remove Payment Method</h3>
                <input
                    type="text"
                    value={removeId}
                    onChange={(e) => setRemoveId(e.target.value)}
                    placeholder="Payment Method ID to Remove"
                />
                <button onClick={handleRemove}>Remove Payment Method</button>
            </div>
        </div>
    );
}

export default ManagePaymentMethods;
