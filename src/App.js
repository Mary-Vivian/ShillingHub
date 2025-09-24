import logo from './logo.svg';
import './App.css';
import Navbar from './Components/nav';
import GrowthSection from './Components/growthSection';
import LandingPage from './Components/landing';
import CTAFooter from './Components/footer';
import MarketSection from './Components/market';
import SolutionSection from './Components/problem';
import FeaturesSection from './Components/features';
import HeroSection from './Components/heroSection';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <LandingPage/>
     <HeroSection/>
     <FeaturesSection/>
     <SolutionSection/>
     <MarketSection/>
     <GrowthSection/>
     <CTAFooter/>
    </div>
  );
}

export default App;
