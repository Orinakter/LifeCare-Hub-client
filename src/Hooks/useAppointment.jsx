import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import useAxiosPrivate from './useAxiosPrivate';

const useAppointment = () => {
    const axiosPrivate = useAxiosPrivate()
    const {user} = useContext(authContext)
    console.log(user);
    const {data:appointmentData,isLoading,refetch} = useQuery({
        queryKey: ['appointmentData',user?.email],
        queryFn: async() =>{
            const res = await axiosPrivate.get(`/book-appointment/${user?.email}`)
            return res.data
        }
        
})
    return {appointmentData,isLoading,refetch}
};

export default useAppointment;