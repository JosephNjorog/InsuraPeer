import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import CreateGroup from './components/Group/CreateGroup';
import JoinGroup from './components/Group/JoinGroup';
import GroupDetails from './components/Group/GroupDetails';
import PremiumContribution from './components/Premium/PremiumContribution';
import PlanCustomization from './components/Plan/PlanCustomization';
import ClaimSubmission from './components/Claims/ClaimSubmission';
import RefundRequest from './components/Refund/RefundRequest';
import PaymentProcessing from './components/Payment/PaymentProcessing';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-group" element={<CreateGroup />} />
                    <Route path="/join-group" element={<JoinGroup />} />
                    <Route path="/group-details/:id" element={<GroupDetails />} />
                    <Route path="/premium" element={<PremiumContribution />} />
                    <Route path="/plan" element={<PlanCustomization />} />
                    <Route path="/claim" element={<ClaimSubmission />} />
                    <Route path="/refund" element={<RefundRequest />} />
                    <Route path="/payment" element={<PaymentProcessing />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
