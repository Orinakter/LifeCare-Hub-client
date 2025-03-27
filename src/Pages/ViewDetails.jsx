import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const ViewDetails = () => {
    const [details,setDetails] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        const data = async()=>{
            const res = await axios.get(`http://localhost:5000/view-details/${id}`)
            setDetails(res.data)
        }
        data()
    },[id])
    return (
     <div className="p-16">
       <div key={details?._id} className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-xl flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <img
          className="w-60 h-60 object-cover rounded-lg border-4 border-gray-200 mb-5"
          src={details?.image}
          alt={details?.doctorName}
      />
      <div>
          <h2 className="text-2xl font-bold text-gray-800">{details?.doctorName}</h2>
          <p className="text-gray-600 mt-2">
              <span className="font-semibold">Specialization:</span> {details?.specialization}
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Experience:</span> {details?.experience} years
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Location:</span> {details?.location}, {details?.city}
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Available Days:</span> {details?.availableDays}
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Time:</span> {details?.time}
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Fees:</span> {details?.fees}
          </p>
          <p className="text-gray-600 mt-1">
              <span className="font-semibold">Rating:</span> {details?.rating}
          </p>
      </div>
      <div className="mt-6">
    <Link to="/book-appointment">
    <button className='btn bg-[#0D92F4] text-white'>Book Appointment</button>
    </Link>
  </div>
  </div>
  
     </div>
    );
};

export default ViewDetails;