import React from 'react';

const BookAppointment = () => {
    return (
        <div>
            <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/sp1trb3G/pexels-rethaferguson-3825586.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <div className="linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-full max-w-2xl border border-gray-400">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0D92F4]">
          AppointMent Form
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#0D92F4] font-semibold">Name </label>
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full p-2 rounded bg-white text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[#0D92F4] font-semibold">Mail </label>
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#0D92F4] font-semibold">Phone Number *</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[#0D92F4] font-semibold">Date Of Appointment</label>
              <input
                type="date"
                className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500  focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#0D92F4] font-semibold">Specialization</label>
              <select className="w-full p-2 rounded bg-white text-gray-950  border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Choose Specialization</option>
                <option>Gynecologist</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
              </select>
            </div>
            <div>
              <label className="text-[#0D92F4] font-semibold">Hospital</label>
              <select className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Choose Hospital</option>
                <option>City Hospital</option>
                <option>Metro Health</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#0D92F4] font-semibold">Gender </label>
              <select className="w-full p-2 rounded bg-white border text-gray-950  border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="text-[#0D92F4] font-semibold">Symptoms </label>
              <input
                type="text"
                placeholder="Enter Symptoms"
                className="w-full p-2 rounded bg-white border text-gray-950 border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-[#0D92F4] font-semibold">
              Taking Any Medications Currently?
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="medication" className="text-[#0D92F4]" /> <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="medication" className="text-[#0D92F4]" /> <span>No</span>
            </label>
          </div>

          <div>
            <label className="text-[#0D92F4] font-semibold">If Yes, Please List It.</label>
            <textarea
              className="w-full p-10 rounded bg-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="2"
            ></textarea>
          </div>

          <button className="w-full py-2 text-lg font-bold bg-[#0D92F4] hover:bg-blue-500 text-white rounded-lg shadow-md">
            BOOK APPOINTMENT
          </button>
        </form>
      </div>
    </div>
            
        </div>

    
        // <div
        //   className="min-h-screen flex items-center justify-center bg-cover bg-center"
        //   style={{
        //     backgroundImage: `url('https://i.ibb.co.com/sp1trb3G/pexels-rethaferguson-3825586.jpg')`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     width: "100%",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
        //   <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-full max-w-2xl border border-gray-400">
        //     <h2 className="text-2xl font-bold text-center mb-6 text-[#0D92F4]">
        //       Appointment Form
        //     </h2>
    
        //     <form className="space-y-4">
        //       <div className="grid grid-cols-2 gap-4">
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Name </label>
        //           <input
        //             type="text"
        //             placeholder="Patient Name"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Mail </label>
        //           <input
        //             type="email"
        //             placeholder="Enter Your E-Mail"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //       </div>
    
        //       <div className="grid grid-cols-2 gap-4">
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Phone Number *</label>
        //           <input
        //             type="text"
        //             placeholder="Phone Number"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Date Of Appointment</label>
        //           <input
        //             type="date"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //       </div>
    
        //       <div className="grid grid-cols-2 gap-4">
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Specialization</label>
        //           <select
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           >
        //             <option className="text-black">Choose Specialization</option>
        //             <option className="text-black">Gynecologist</option>
        //             <option className="text-black">Cardiologist</option>
        //             <option className="text-black">Dermatologist</option>
        //           </select>
        //         </div>
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Hospital</label>
        //           <select
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           >
        //             <option className="text-black">Choose Hospital</option>
        //             <option className="text-black">City Hospital</option>
        //             <option className="text-black">Metro Health</option>
        //           </select>
        //         </div>
        //       </div>
    
        //       <div className="grid grid-cols-2 gap-4">
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Gender </label>
        //           <input
        //             type="text"
        //             placeholder="Enter Gender"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //         <div>
        //           <label className="text-[#0D92F4] font-semibold">Symptoms </label>
        //           <input
        //             type="text"
        //             placeholder="Enter Symptoms"
        //             className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //             style={{
        //               background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //               color: "white",
        //             }}
        //           />
        //         </div>
        //       </div>
    
        //       <div className="flex items-center space-x-4">
        //         <label className="text-[#0D92F4] font-semibold">
        //           Taking Any Medications Currently?
        //         </label>
        //         <label className="flex items-center space-x-2">
        //           <input type="radio" name="medication" className="text-[#0D92F4]" /> <span>Yes</span>
        //         </label>
        //         <label className="flex items-center space-x-2">
        //           <input type="radio" name="medication" className="text-[#0D92F4]" /> <span>No</span>
        //         </label>
        //       </div>
    
        //       <div>
        //         <label className="text-[#0D92F4] font-semibold">If Yes, Please List It.</label>
        //         <textarea
        //           className="w-full p-2 rounded border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //           rows="2"
        //           style={{
        //             background: "linear-gradient(to right, #0D92F4, #35A5FF)",
        //             color: "white",
        //           }}
        //         ></textarea>
        //       </div>
    
        //       <button className="w-full py-2 text-lg font-bold bg-[#0D92F4] hover:bg-blue-500 text-white rounded-lg shadow-md">
        //         BOOK APPOINTMENT
        //       </button>
        //     </form>
        //   </div>
        // </div>


    );
};

export default BookAppointment;
