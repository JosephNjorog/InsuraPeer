import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import GroupDashboard from './pages/GroupDashboard';
import Services from './components/Services';
import SubmitClaims from './pages/SubmitClaims';
import PeerReviewPage from './pages/PeerReviewPage';
import GroupVotingPage from './pages/GroupVoting';
import GroupInsurancePlanCustomization from './pages/GroupInsurancePlanCustomization';
import PaymentPage from './pages/PaymentPage'; // Import the new page

function App() {
  return (
    <BrowserRouter> {/* Wrap Routes with BrowserRouter */}
      <Routes>
        {/* Public pages with Navbar, Hero, etc. */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <AboutUs />
              <Footer />
            </>
          }
        />
        
        {/* Dashboard page without Navbar, Services, and AboutUs */}
        <Route
          path="/dashboard"
          element={<GroupDashboard />}
        />
        
        {/* Other pages with Navbar, Footer, etc. */}
        <Route
          path="/submit-claims"
          element={
            <>
              <SubmitClaims />
            </>
          }
        />
        <Route
          path="/peer-review"
          element={
            <>
              <PeerReviewPage />
            </>
          }
        />
        <Route
          path="/group-voting"
          element={
            <>
              <GroupVotingPage />
            </>
          }
        />
        <Route
          path="/insurance-plan-customization"
          element={
            <>
              <GroupInsurancePlanCustomization />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <PaymentPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;