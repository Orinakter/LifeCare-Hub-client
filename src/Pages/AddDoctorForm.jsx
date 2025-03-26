import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddDoctorForm = () => {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [availableDays, setAvailableDays] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [fees, setFees] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorInfo = {
      doctorName,
      specialization,
      experience,
      availableDays,
      time,
      city,
      location,
      fees,
      rating,
      image,
    };
    console.log(doctorInfo);

    const res = await axios.post(`http://localhost:5000/doctor`,doctorInfo );
    console.log(res.data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Doctor Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="p-12">
      <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Doctor Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="">
            <label className="fieldset-label mb-1">Doctor Name</label>
            <input
              type="name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="Name"
            />
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
          {/* <div className="">
          <label className="fieldset-label mb-1">Email</label>
          <input type="name" className="w-full p-3 border rounded-md" placeholder="Name" />
         
        </div> */}

          <div className="">
            <label className="fieldset-label mb-1">specialization</label>

            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="">Select Specialization</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Pediatrician">Pediatrician</option>
            </select>
          </div>

          <div className="">
            <label className="fieldset-label mb-1">Experience</label>
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience (years)"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <select
            value={availableDays}
            onChange={(e) => setAvailableDays(e.target.value)}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Available Days</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>

          <select
           value={time}
           onChange={(e) => setTime(e.target.value)} 
          className="w-full p-3 border rounded-md">
           
            <option value="">Select Available Time Slots</option>
            <option value="8am to 12pm">8am to 12pm</option>
            <option value="12pm to 4pm">12pm to 4pm</option>
            <option value="4pm to 10pm">4pm to 10pm</option>
          </select>

          <div className="">
            <label className="fieldset-label mb-1">Hospital City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Hospital"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Hospital Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Fees</label>
            <input
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="Consultation Fee"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              step="0.1"
              placeholder="Ratings"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorForm;
