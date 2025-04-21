import React from "react";
import useAllAppointment from "../Hooks/useAllAppointment";
import { TiDelete } from "react-icons/ti";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import axios from "axios";



const AllAppointments = () => {
  const { appointmentData, isLoading, refetch } = useAllAppointment();
  const deleteHandler = async(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`http://localhost:5000/appointment-delete/${id}`);
        if (res.data.deletedCount === 1) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  }
 

  return (
   <div className="">
    {
        isLoading ? <Loader></Loader> : 
        <div className="p-6">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-gray-200 w-full">
                <th>SL</th>
                <th>DoctorName</th>
                <th>PatientName</th>
                <th>PatientEmail</th>
                <th>PhoneNumber</th>
                <th>AppointmentDate</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData?.map((item, index) => (
                <tr key={item?._id} className="bg-gray-100 w-full">
                  <td>{index + 1}</td>
                  <td>{item?.doctorName}</td>
                  <td>{item?.name}</td>
                  <td>{item?.patientEmail}</td>
                  <td>{item?.phoneNumber}</td>
                  <td>{item?.appointmentDate}</td>
                  <td>{item?.gender}</td>
                  <td><button  
                  onClick={()=>deleteHandler(item?._id)}
                  className="btn text-red-500 text-xl"><TiDelete /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    }
   </div>
  );
};

export default AllAppointments;
