import "./App.css";
import "./index.css";
import { FaHome, FaUserFriends, FaWallet, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Carousel from "./components/Carousel";
import Header from "./header";
import ActionRow from "./actionRow";
import HeroSection from "./heroSection";
import ReferralPage from "./referralpage";
import WalletScreen from "./walletscreen";
import Footer from "./footer";
import Navbar from "./components/Navbar";
import Mydata from "./Mydata";
import AccountPage from "./AccountPage";
import Profile from "./Profile";
import SecurityCenter from "./SecurityCenter";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import BankAccountPage from "./BankAccountPage";

// Carousel Images
const carouselImages = [
  "https://d2ic27f7270xow.cloudfront.net/backend/production/2025/06/145_1750522655_1750522653851_ofxlxlLbXA.jpg",
  "https://d2ic27f7270xow.cloudfront.net/backend/production/2025/03/05_EN_1920x600_HOME_1740982810748.jpg",
  "http://d2ic27f7270xow.cloudfront.net/backend/production/2025/03/01_EN_1920x600_HOME_1740982752818.jpg",
];

function HomePage() {
  return (
    <div style={{ height: "150vh", backgroundColor: "black" }}>
      <Header />
      <Carousel images={carouselImages} />
      <ActionRow />
      <HeroSection />
      <Footer />
    </div>
  );
}


function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/wallet"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/Mydata" element={<Mydata />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/security" element={<SecurityCenter />} />
      </Routes>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/referral" className="nav-item">
          <FaUserFriends />
          <span>Referral</span>
        </Link>
        <Link to="/wallet" className="nav-item">
          <FaWallet />
          <span>Wallet</span>
        </Link>
        <Link to="/account" className="nav-item">
          <FaUser />
          <span>Account</span>
        </Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/bank-account" element={<BankAccountPage />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
