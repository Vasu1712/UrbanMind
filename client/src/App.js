import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home.js';
import DashboardLandingPage from './routes/DashboardLandingPage';
import SignupPage from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import ProfilePage from './routes/ProfilePage';
import Transactions from './routes/Transactions';
import Statistics from './routes/Statistics';
import Blogspace from './routes/Blogspace';
import Overview from './routes/Overview';
import Tasks from './routes/Tasks';
import Leaderboard from './routes/Leaderboard';
import Scan from './routes/ScanReceipt.js';
import './firebaseConfig';
import './custom.css';
import ScanReceipt from './routes/ScanReceipt.js';

// import ProtectedRoute from './components/ProtectedRoute';

function App() {

	// const [cookie] = useCookies(['token']);
  // const isUserLoggedIn = !!localStorage.getItem('user')
  return (
    <div className='w-screen h-screen font-sfpro'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=<Home />
          />
          <Route
            path='/dashboard'
            element=<DashboardLandingPage />
          />
          <Route
            path='/signup'
            element=<SignupPage />
          />
          <Route
            path='/login'
            element=<LoginPage />
          />
          <Route
            path='/profile'
            element=<ProfilePage />
          />
          <Route
            path='/transactions'
            element=<Transactions />
          />
          <Route
            path='/blogspace'
            element=<Blogspace />
          />
          <Route
            path='/statistics'
            element=<Statistics />
          />
          <Route
            path='/overview'
            element=<Overview />
          />
          < Route 
            path='/tasks'
            element=<Tasks />
          />
          < Route 
            path='/leaderboard'
            element=<Leaderboard />
          />
          < Route 
            path='/scan'
            element=<Scan />
          />
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

