import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useSingleData = (id) => {
    const {data: singleData,isLoading,refetch} = useQuery({
        queryKey: ['singleData',id],
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/view-details/${id}`)
            return res.data
        }
          
      })

    return {singleData,isLoading,refetch}
};

export default useSingleData;