import React, { useState, useEffect } from 'react';
import { viewProfitSharing } from '../services/api';

const ProfitSharing = ({ groupId }) => {
  const [surplus, setSurplus] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await viewProfitSharing(groupId);
      setSurplus(response.data.surplus);
    }
    fetchData();
  }, [groupId]);

  return (
    <div className="container">
      <h1>End-of-Term Profit Sharing</h1>
      <p>Surplus Amount: {surplus}</p>
      <button className="btn btn-success mt-3">Withdraw Surplus</button>
      <button className="btn btn-primary mt-3 ml-2">Reinvest Surplus</button>
    </div>
  );
};

export default ProfitSharing;
