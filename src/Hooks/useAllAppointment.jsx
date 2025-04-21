import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllAppointment = () => {
    const {data:appointmentData,isLoading,refetch} = useQuery({
        queryKey: ['appointmentData'],
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/book-appointment`)
            return res.data
        }
         
      })
    return {appointmentData,isLoading,refetch}
};

export default useAllAppointment;