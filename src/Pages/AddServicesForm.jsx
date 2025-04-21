import axios from 'axios';
import React, { useState } from 'react';
import { FaHeartbeat, FaStethoscope } from 'react-icons/fa';

import Swal from 'sweetalert2';


const AddServicesForm = () => {
    const [category,setCategory] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const servicesHandler =async(e)=>{
       e.preventDefault()
        const ServicesInfo = {
            category,
            description,
            image
        }

        const res = await axios.post(`http://localhost:5000/add-services-form`,ServicesInfo)
        console.log(res.data);
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Service Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
    }
    
    return (
        <div>
             <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#0D92F4] mb-2">Add Medical Service</h2>
          <p className="text-gray-500">Choose a category and describe the service</p>
        </div>

        <form onSubmit={servicesHandler} className="space-y-5">
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              <span className="flex items-center gap-2">
                <FaStethoscope className="text-blue-500" />
                Service Category
              </span>
            </label>
            <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="">-- Select Category --</option>
              <option value="Cardiac Surgery">Cardiac Surgery</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Urology">Urology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Ophthalmology">Ophthalmology</option>
            </select>
          </div>

          <div className="">
            <label className="fieldset-label mb-1">Doctor Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="image"
            />
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              <span className="flex items-center gap-2">
                <FaHeartbeat className="text-red-500" />
                Image
              </span>
            </label>
            <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
              placeholder="Write about the service..."
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0D92F4] text-white font-semibold py-2.5 px-6 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
            
        </div>
    );
};

export default AddServicesForm;