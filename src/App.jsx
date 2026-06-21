import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';

// Reusable Navigation Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

// Public/Visitor Page Components
import Home from './pages/Home/Home';
import FitnessPrograms from './pages/FitnessPrograms/FitnessPrograms';
import EliteTrainers from './pages/EliteTrainers/EliteTrainers';
import ClassSchedule from './pages/ClassSchedule/ClassSchedule';
import MembershipPlans from './pages/MembershipPlans/MembershipPlans';
import ContactUs from './pages/ContactUs/ContactUs';
import JoinNow from './pages/JoinNow/JoinNow';

// Private Dashboard Page Components
import MemberDashboard from './pages/Dashboard/MemberDashboard';
import Workouts from './pages/Dashboard/Workouts';
import Nutrition from './pages/Dashboard/Nutrition';
import Analytics from './pages/Dashboard/Analytics';
import Settings from './pages/Dashboard/Settings';

// Layout wrapper for Public/Visitor Pages
function PublicLayout() {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="public-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout wrapper for Private Dashboard Pages
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Visitor Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<FitnessPrograms />} />
          <Route path="/trainers" element={<EliteTrainers />} />
          <Route path="/schedule" element={<ClassSchedule />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        {/* Authentication Gate Page (No shared header/footer or sidebar) */}
        <Route path="/join" element={<JoinNow />} />

        {/* Member Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<MemberDashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch-all Redirection to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
