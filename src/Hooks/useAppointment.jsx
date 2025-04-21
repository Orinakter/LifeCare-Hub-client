import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';

const useAppointment = () => {
    const {user} = useContext(authContext)
    const {data:appointmentData,isLoading,refetch} = useQuery({
        queryKey: ['appointmentData',user?.email],
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/book-appointment/${user?.email}`)
            return res.data
        }
        
})
    return {appointmentData,isLoading,refetch}
};

export default useAppointment;