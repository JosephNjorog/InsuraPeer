import React, { useState } from 'react';
import { customizePlan } from '../services/api';

const PlanCustomization = ({ groupId }) => {
  const [coverage, setCoverage] = useState('');
  const [premium, setPremium] = useState('');

  const handleCustomizePlan = async () => {
    try {
      await customizePlan(groupId, coverage, premium);
      alert('Plan updated successfully!');
    } catch (error) {
      alert('Error updating plan.');
    }
  };

  return (
    <div className="container">
      <h1>Plan Customization</h1>
      <div className="form-group">
        <label>Coverage:</label>
        <input
          type="number"
          className="form-control"
          value={coverage}
          onChange={(e) => setCoverage(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Premium:</label>
        <input
          type="number"
          className="form-control"
          value={premium}
          onChange={(e) => setPremium(e.target.value)}
        />
      </div>
      <button onClick={handleCustomizePlan} className="btn btn-primary mt-3">Update Plan</button>
    </div>
  );
};

export default PlanCustomization;
