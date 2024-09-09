import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupDetails } from '../../utils/api';

function GroupDetails() {
    const { id } = useParams();
    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                const data = await getGroupDetails(id);
                setGroup(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch group details:', error);
                setError('Failed to fetch group details. Please try again later.');
                setLoading(false);
            }
        };

        fetchGroupDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!group) return <div>No group details available.</div>;

    return (
        <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
            {/* Render other group details here */}
        </div>
    );
}

export default GroupDetails;
