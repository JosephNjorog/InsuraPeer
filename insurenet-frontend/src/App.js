import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import GroupDashboard from './pages/GroupDashboard';
import Services from './components/Services'
import SubmitClaims from './pages/SubmitClaims.jsx'
import PeerReviewPage from './pages/PeerReviewPage.jsx'
import GroupVotingPage from './pages/GroupVoting.jsx'
import GroupInsurancePlanCustomization from './pages/GroupInsurancePlanCustomization.jsx'

function App() {
  return (
    <main>
      <Navbar/>
      <section id="home">
        <Hero/>
      </section>
      <section>
        <Services/>
      </section>
      <section id='about'>
        <AboutUs/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
