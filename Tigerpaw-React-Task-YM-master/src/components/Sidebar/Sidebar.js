import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import itemIcons from '../../assets/icons/icons.js';
import './sidebar.css';

function Sidebar() {
	const [activeItem, setActiveItem] = useState('');	//state to manage active element dynamically

	//function to set the active item when clicked
	const handleItemClick = (itemName) => {
		setActiveItem(itemName);
	};

	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 text-warning grey-color sidebar" style={{ width: '210px' }}>
			<ul className="nav nav-pills flex-column mb-auto">
				<li className={`nav-item ${activeItem === 'Dashboard' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{/* dashboard icon */}
						{itemIcons['Dashboard']}
						<Link to="/dashboard" className="nav-link text-yellow font-weight-bolder" onClick={() => handleItemClick('Dashboard')}>
							Dashboard
						</Link>
					</div>
				</li>

				<li className={`nav-item ${activeItem === 'Attendance' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['Attendance']}
						<Link to="attendance" className="nav-link text-yellow font-weight-bolder" onClick={() => handleItemClick('Attendance')}>
							Attendance
						</Link>
					</div>
				</li>

				<li className={`nav-item ${activeItem === 'TimeSheet' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['TimeSheet']}
						<Link to="timesheet" className="nav-link text-yellow font-weight-bolder" onClick={() => handleItemClick('TimeSheet')}>
							Time Sheet
						</Link>
					</div>
				</li>

				<li className={`nav-item ${activeItem === 'ProjectTask' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['ProjectTask']}
						<Link to="projecttask" className=" nav-link text-yellow font-weight-bolder" data-toggle="collapse" data-target="#project-collapse" aria-expanded="false" onClick={() => handleItemClick('ProjectTask')}>
							Project / Task 
						{itemIcons['Dropdown']}
						</Link>
					</div>
				</li>
				<div className="collapse" id="project-collapse">
					<ul className="btn-toggle-nav list-unstyled fw-normal small">
						<li><Link to="#" className="text-yellow">Project 1</Link></li>
						<li><Link to="#" className="text-yellow">Project 2</Link></li>
					</ul>
				</div>

				<li className={`nav-item ${activeItem === 'Approval' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['Approval']}
						<Link to="approval" className=" nav-link text-yellow font-weight-bolder" data-toggle="collapse" data-target="#approval-collapse" aria-expanded="false" onClick={() => handleItemClick('Approval')}>
							Approval 
						 {itemIcons['Dropdown']}
						</Link>
					</div>
				</li>
				<div className="collapse" id="approval-collapse">
					<ul className="btn-toggle-nav list-unstyled fw-normal small">
						<li><Link to="#" className="text-yellow">Accepted</Link></li>
						<li><Link to="#" className="text-yellow">Rejected</Link></li>
					</ul>
				</div>

				<li className={`nav-item ${activeItem === 'Payroll' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['Payroll']}
						<Link to="payroll" className="nav-link text-yellow font-weight-bolder" onClick={() => handleItemClick('Payroll')}>
							Payroll
						</Link>
					</div>
				</li>

				<li className={`nav-item ${activeItem === 'ProfileSettings' ? 'active' : ''}`}>
					<div className="d-flex align-items-center">
						{itemIcons['ProfileSettings']}
						<Link to="profilesettings" className="nav-link text-yellow font-weight-bolder" onClick={() => handleItemClick('ProfileSettings')}>
							Profile settings
						</Link>
					</div>
				</li>

			</ul>
			<div className="d-flex text-danger align-items-center">
				{itemIcons['Logout']}
				<Link to="#" className="nav-link text-danger font-weight-bolder">
					Logout
				</Link>
			</div>
		</div >
	);
}

export default Sidebar;