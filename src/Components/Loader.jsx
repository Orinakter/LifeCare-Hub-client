import React from "react";
import HashLoader from 'react-spinners/HashLoader'

const Loader = () => {
  return (
    <div className="py-10 px-4 flex justify-center items-center">
      <HashLoader color="#0D92F4" size={80} />
    </div>
  );
};

export default Loader;
