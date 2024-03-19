import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import AdmHeader from './components/AdmHeader';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import AdminSignIn from './pages/AdminSignIn';
import AdminHome from './pages/AdminHome';
import AdminProfile from './pages/AdminProfile';
import AdmPrivateRoute from './components/AdmPrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
         
        <Route path="/" element={<><Header/><Home /></>} />
        <Route path="/sign-in" element={<><Header/><SignIn /></>} />        
        <Route path="/sign-up" element={<><Header/><SignUp/></>} />
        <Route path="/about" element={<><Header/><About /></>} />
        <Route path="/listing/:listingId" element={<><Header/><Listing /></>} />
        <Route path='/search' element={<><Header/><Search /></>} />

        <Route path="/admin-sign-in" element={<><AdmHeader/><AdminSignIn /></>} />
        <Route path="/admin-home" element={<><AdmHeader/><AdminHome /></>} />
        
        

        <Route element={<PrivateRoute />} >
          <Route path="/profile" element={<><Header/><Profile /></>} />
          <Route path="/create-listing" element={<><Header/><CreateListing /></>} />
          <Route path="/update-listing/:listingId" element={<><Header/><UpdateListing /></>} />
          

        </Route>

        <Route element={<AdmPrivateRoute />} >
          <Route path="/admin-profile" element= {<><AdmHeader/><AdminProfile /></>}/>
        </Route>
      
    </Routes>
  </BrowserRouter>

    
  );
}
