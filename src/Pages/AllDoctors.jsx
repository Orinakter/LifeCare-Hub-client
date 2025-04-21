
import React from "react";
import useDoctors from "../Hooks/useDoctors";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router";

const AllDoctors = () => {
  const { doctorData, isLoading, refetch } = useDoctors();
  const deleteHandler = async (id) => {
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
        const res = await axios.delete(`http://localhost:5000/doctor-delete/${id}`);
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
  };
  return (
   <div className="">
    <div className="">
    
        {
            isLoading ? <Loader></Loader> :
            <div className="p-8">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
          <tr className="bg-gray-200 w-full">
            <th>SL</th>
            <th>Image</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>AvailableDays</th>
            <th>Time</th>
            <th>Fees</th>
            <th>Location</th>
           <td>Experience</td> 
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
                doctorData?.map((item,index)=>(
                    <tr key={item?._id} className="bg-gray-100 w-full">
                        <td>{index+1}</td>
                        <td>
                            <img src={item?.image} alt=""  className="w-10 h-10 rounded-full object-cover"/>
                        </td>
                        <td>{item?.doctorName}</td>
                        <td>{item?.specialization}</td>
                        <td>{item?.availableDays}</td>
                        <td>{item?.time}</td>
                        <td>{item?.fees}</td>
                        <td>{item?.location}</td>
                        <td>{item?.experience}</td>
                        <td className="flex items-center gap-3">
                           <Link to={`/dashboard/doctor-edit/${item?._id}`}>
                           <button
                             className="btn text-[#0D92F4] text-xl"><FaEdit />
                             </button>
                           </Link>
                            <button 
                            onClick={()=>deleteHandler(item?._id)}
                            className="btn text-red-500 text-xl"><MdDelete /></button>

                        </td>
                        

                    </tr>
                    
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
        }
    </div>
   </div>
  );
};

export default AllDoctors;
