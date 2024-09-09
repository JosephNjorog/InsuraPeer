import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GroupManagement from './components/GroupManagement';
import PlanCustomization from './components/PlanCustomization';
import ProfitSharing from './components/ProfitSharing';

function App() {
  const groupId = '12345';  // Example group ID, should be dynamic in a real app

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">InsureNet App</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/group-management">Group Management</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/plan-customization">Plan Customization</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profit-sharing">Profit Sharing</a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Dashboard groupId={groupId} />
          </Route>
          <Route path="/group-management">
            <GroupManagement groupId={groupId} />
          </Route>
          <Route path="/plan-customization">
            <PlanCustomization groupId={groupId} />
          </Route>
          <Route path="/profit-sharing">
            <ProfitSharing groupId={groupId} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
