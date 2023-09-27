import React from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from './Sidebar/NavigationItems/Dashboard/Dashboard.js';
import Attendance from './Sidebar/NavigationItems/Attendance/Attendance.js';
import TimeSheet from './Sidebar/NavigationItems/TimeSheet/TimeSheet.js';
import ProjectTask from './Sidebar/NavigationItems/ProjectTask/ProjectTask.js';
import Approval from './Sidebar/NavigationItems/Approval/Approval.js';
import Payroll from './Sidebar/NavigationItems/Payroll/Payroll.js';
import ProfileSettings from './Sidebar/NavigationItems/ProfileSettings/ProfileSettings.js';

const Home = () => {
    return (
        //Render the components based on the routes
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/timesheet" element={<TimeSheet />} />
            <Route path="/projecttask" element={<ProjectTask />} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/profilesettings" element={<ProfileSettings />} />
        </Routes>
    )
}

export default Home;
