
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginForm from "./components/Auth/LoginForm";
// import SignupForm from "./components/Auth/SignupForm";
// import ForgotPassword from "./components/Auth/ForgotPassword";
import Usersetting from "./pages/Usersetting";
import BillingDetails from "./components/usersettings/BillingDetails";
import BillingHistory from "./components/BillingHistorys/BillingHistorys";



const App: React.FC = () => {
  return (
    <Router>
       <Routes>
        {/*
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/user-settings" element={<Usersetting/>} />
        <Route path="/billing-details" element={<BillingDetails/>} />
        <Route path="/billing-history" element={<BillingHistory/>} />
        
      </Routes>
    </Router>
  );
};

export default App;




  

    

  
    
     

      
        
      

    
        

  


