import React, { useState } from 'react';
import { joinGroup } from '../../utils/api';

function JoinGroup() {
    const [groupId, setGroupId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await joinGroup({ groupId });
            alert('Joined group successfully!');
        } catch (error) {
            console.error('Failed to join group', error);
        }
    };

    return (
        <div>
            <h2>Join Group</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Group ID:
                    <input
                        type="text"
                        value={groupId}
                        onChange={(e) => setGroupId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Join Group</button>
            </form>
        </div>
    );
}

export default JoinGroup;
