import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useDoctors = () => {
    const {data:doctorData,isLoading,refetch} = useQuery({
        queryKey: ['doctorData'],
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/all-doctor`)
            return res.data
        }
          
      })
    return {doctorData,isLoading,refetch}
};

export default useDoctors;