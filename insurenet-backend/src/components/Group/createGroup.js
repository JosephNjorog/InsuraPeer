import React, { useState } from 'react';
import { createGroup } from '../../utils/api';

function CreateGroup() {
    const [groupName, setGroupName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createGroup({ name: groupName });
            alert('Group created successfully!');
        } catch (error) {
            console.error('Failed to create group', error);
        }
    };

    return (
        <div>
            <h2>Create Group</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Group Name:
                    <input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Create Group</button>
            </form>
        </div>
    );
}

export default CreateGroup;
