import axios from "axios";
import React, { useState } from "react";
import useSingleData from "../Hooks/useSingleData";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const DoctorEdit = () => {
  const { id } = useParams();
  const { singleData, isLoading, refetch } = useSingleData(id);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorName = e.target.doctorName.value;
    const specialization = e.target.specialization.value;
    const image = e.target.image.value;
    const experience = e.target.experience.value;
    const availableDays = e.target.availableDays.value;
    const time = e.target.time.value;
    const city = e.target.city.value;
    const location = e.target.location.value;
    const fees = e.target.fees.value;
    const rating = e.target.rating.value;



    const updateDoctorInfo = {
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

    const res = await axios.patch(
      `http://localhost:5000/edit-doctor/${id}`,
      updateDoctorInfo
    );
    console.log(res.data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Doctor Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  console.log(singleData);
  return (
    <div className="">
        {
            isLoading ? <Loader></Loader> :
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
              name="doctorName"
              defaultValue={singleData?.doctorName}
              className="w-full p-3 border rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Doctor Image</label>
            <input
              type="text"
              name="image"
              defaultValue={singleData?.image}
              className="w-full p-3 border rounded-md"
              placeholder="image"
            />
          </div>

          <div className="">
            <label className="fieldset-label mb-1">specialization</label>

            <select
              name="specialization"
              defaultValue={singleData?.specialization}
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
              name="experience"
              defaultValue={singleData?.experience}
              placeholder="Experience (years)"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <select
            name="availableDays"
            defaultValue={singleData?.availableDays}
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
            name="time"
            defaultValue={singleData?.time}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Available Time Slots</option>
            <option value="8am to 12pm">8am to 12pm</option>
            <option value="12pm to 4pm">12pm to 4pm</option>
            <option value="4pm to 10pm">4pm to 10pm</option>
          </select>

          <div className="">
            <label className="fieldset-label mb-1">Hospital City</label>
            <input
              type="text"
              name="city"
              defaultValue={singleData?.city}
              placeholder="Hospital"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Hospital Location</label>
            <input
              type="text"
              name="location"
              defaultValue={singleData?.location}
              placeholder="Location"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Fees</label>
            <input
              type="number"
              name="fees"
              defaultValue={singleData?.fees}
              placeholder="Consultation Fee"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <label className="fieldset-label mb-1">Rating</label>
            <input
              type="number"
             name="rating"
             defaultValue={singleData?.rating}
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
        }
    </div>
  );
};

export default DoctorEdit;
