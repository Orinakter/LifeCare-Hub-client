import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import { authContext } from "../Context/AuthProvider";

const ViewDetails = () => {
  const { user } = useContext(authContext);
  const [name, setName] = useState("");
  const [patientEmail, setpatientEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [gender, setGender] = useState("");
  const [details, setDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`http://localhost:5000/view-details/${id}`);
      setDetails(res.data);
    };
    data();
  }, [id]);

  const appointmentSubmitHandler = async (e) => {
    e.preventDefault();

    const bookAppointmentInfo = {
      Email: user?.email,
      name,
      patientEmail,
      phoneNumber,
      appointmentDate,
      gender,
      doctorName : details?.doctorName,
      // doctorImage : details?.image
    };

    const res = await axios.post(
      `http://localhost:5000/book-appointment`,
      bookAppointmentInfo
    );
    console.log(res.data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Appointment Booking Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    const bookAppointment = async () => {
      const res = await axios.get(`http://localhost:5000/book-appointment`);
      console.log(res.data);
    };
    bookAppointment();
  }, []);

  return (
    <div className="p-16">
      <div
        key={details?._id}
        className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-xl flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6"
      >
        <img
          className="w-full h-64 object-cover rounded-lg border-4 border-gray-200 mb-5"
          src={details?.image}
          alt={details?.doctorName}
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {details?.doctorName}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Specialization:</span>{" "}
            {details?.specialization}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Experience:</span>{" "}
            {details?.experience} years
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Location:</span> {details?.location}
            , {details?.city}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Available Days:</span>{" "}
            {details?.availableDays}
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
          <div className="divider"></div>
          <div className="mt-12">
            <div className="max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Book an Appointment</h2>
              <p className="text-gray-600">Date: 11 February, 2025</p>
              <p className="text-gray-600 mb-4">Time: 06:47</p>
              <div className="">
                <form onSubmit={appointmentSubmitHandler} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0D92F4] font-semibold">
                        Name{" "}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Patient Name"
                        className="w-full p-2 rounded bg-white text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[#0D92F4] font-semibold">
                        Mail{" "}
                      </label>
                      <input
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setpatientEmail(e.target.value)}
                        placeholder="Enter Your E-Mail"
                        className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0D92F4] font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[#0D92F4] font-semibold">
                        Date Of Appointment
                      </label>
                      <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500  focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4"></div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0D92F4] font-semibold">
                        Gender{" "}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-2 text-lg font-bold bg-[#0D92F4] hover:bg-blue-500 text-white rounded-lg shadow-md">
                    BOOK APPOINTMENT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
