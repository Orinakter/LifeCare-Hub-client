import React from 'react';
import { NavLink, Outlet } from 'react-router';
import AddDoctorForm from '../Pages/AddDoctorForm';

const Dashboard = () => {
    return (
        <div className='flex min-h-[100vh] '>
            {/* sidebar */}
            <div className="w-2/12 bg-blue-300">
            <ul>
                <NavLink to="add-doctor"><li>Add-Doctor-Form</li></NavLink>
            </ul>
           


            </div>
            <div className="w-10/12">
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;