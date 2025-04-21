import axios from "axios";
import Swal from "sweetalert2";
import useAppointment from "../Hooks/useAppointment";
import Loader from "../Components/Loader";


const MyAppointments = () => {
  const { appointmentData, isLoading, refetch } = useAppointment();

  const cancelBtnHandler = async (id) => {
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
        const res = await axios.delete(`http://localhost:5000/cancel/${id}`);
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
    <div className="p-8">
     
     {
      isLoading ? <Loader></Loader> : 
      <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="bg-gray-200 w-full">
            <th>SL</th>
            {/* <th>Image</th> */}
            <th>Doctor Name</th>
            <th>Patient Name</th>
            <th>Patient Email</th>
            <th>PhoneNumber</th>
            <th>AppointmentDate</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {appointmentData?.map((item, index) => (
            <tr key={item?._id} className="bg-white my-2">
              <td>{index + 1}</td>
              {/* <td>{item?.image}</td> */}
              <td>{item?.doctorName}</td>
              <td>{item?.name}</td>
              <td>{item?.patientEmail}</td>
              <td>{item?.phoneNumber}</td>
              <td>{item?.appointmentDate}</td>
              <td>{item?.gender}</td>
              <td>
                <button
                  onClick={() => cancelBtnHandler(item?._id)}
                  className="btn bg-red-600 text-white font-bold"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     }
    </div>
  );
};

export default MyAppointments;
