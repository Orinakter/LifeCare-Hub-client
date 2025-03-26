import React from "react";

const AddDoctorForm = () => {
  return (
   <div className="p-12">
     <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Doctor Information</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
        
        <select className="w-full p-3 border rounded-md">
          <option value="">Select Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>
        
        <input type="number" placeholder="Experience (years)" className="w-full p-3 border rounded-md" />
        
        <select className="w-full p-3 border rounded-md">
          <option value="">Select Available Days</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        
        <select className="w-full p-3 border rounded-md">
          <option value="">Select Available Time Slots</option>
          <option value="8am to 12pm">8am to 12pm</option>
          <option value="12pm to 4pm">12pm to 4pm</option>
          <option value="4pm to 10pm">4pm to 10pm</option>
        </select>
        
        <input type="text" placeholder="Hospital" className="w-full p-3 border rounded-md" />
        <input type="text" placeholder="Location" className="w-full p-3 border rounded-md" />
        <input type="number" placeholder="Consultation Fee" className="w-full p-3 border rounded-md" />
        <input type="number" step="0.1" placeholder="Ratings" className="w-full p-3 border rounded-md" />
        <button type="submit" className="w-full p-3 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
   </div>
  );
};

export default AddDoctorForm;
