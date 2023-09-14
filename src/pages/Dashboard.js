import React from 'react';
import Navbar from '../components/Navbar';
import DashboardDisplay from '../components/DashboardDisplay';
import '../styles/DashBoardStyle.css';

function Dashboard() {
  return (
    <div className='dashboard'>
        <Navbar/>
        <DashboardDisplay/>
     
    </div>
  );
}

export default Dashboard;
