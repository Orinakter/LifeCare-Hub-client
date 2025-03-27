 import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AvailableDoctor = () => {
     const [doctor,setDoctor] = useState([])
    
     
     useEffect(() => {
       
        const doctor = async()=>{
            const res = await axios.get(`http://localhost:5000/available-doctor`)
            setDoctor(res.data)

        }
        doctor()


       }, []);
       
    
    return (
        <div className='p-12'>
            <h1 className="text-center text-4xl font-bold mb-8">Available Doctor</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 rounded-xl">
            {
                doctor.map(item=>(
                    <div key={item.id} className=" flex flex-col border-2 border-gray-100 p-12">
                        <div className="flex-1">
                        <img src={item?.image} alt="" className='w-[300px] h-[250px] object-cover rounded-xl' />
                        <h2 className="mt-4"><span className='font-semibold'>Name:</span> {item?.doctorName}</h2>
                        <p className=""><span className='font-semibold'>Specialization:</span>  {item?.specialization}</p>
                        <p className=""><span className='font-semibold'>Experience:</span> {item?.experience}</p>
                        <p className=""><span className='font-semibold'>AvailableDays:</span> {item?.availableDays}</p>
                        <p className=""><span className='font-semibold'>Time:</span> {item?.time}</p>
                        
                        <p className=""><span className='font-semibold'>Location:</span> {item?.location}</p>
                        

                        </div>

                        <div className="flex justify-center items-center mt-8">
                           <Link to={`/view-details/${item?._id}`}>
                           <button className='btn bg-[#0D92F4] text-white'>View Details</button>
                           </Link>
                        </div>

                    </div>
                ))
            }
            </div>
            
        </div>
    );
};

export default AvailableDoctor;