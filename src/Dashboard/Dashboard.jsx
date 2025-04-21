import React from 'react';
import { NavLink, Outlet } from 'react-router';
import AddDoctorForm from '../Pages/AddDoctorForm';

const Dashboard = () => {
    return (
        <div className='flex min-h-[100vh] '>
            {/* sidebar */}
            <div className="w-2/12 bg-blue-300 px-4 py-6 flex flex-col gap-4 ">
            
                <NavLink to="add-doctor" className="btn w-full text-[#0D92F4]">Add-Doctor-Form</NavLink>
                <NavLink to="all-doctors" className="btn w-full text-[#0D92F4]">All Doctors</NavLink>
                <NavLink to="all-appointments" className="btn w-full text-[#0D92F4]">All Appointments</NavLink>
                <NavLink to="add-services" className="btn w-full text-[#0D92F4]">Add Services Form</NavLink>
           
               


            </div>
            <div className="w-10/12">
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;