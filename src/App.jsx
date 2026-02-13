import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/CommonSignup";
import Signin from "./components/signin/CommonSignin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ResidentDashboard from "./pages/ResidentDashboard/ResidentDashboard";
import SecurityDashboard from "./pages/SecurityDashboard/SecurityDashboard";
//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/security-dashboard" element={<SecurityDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
