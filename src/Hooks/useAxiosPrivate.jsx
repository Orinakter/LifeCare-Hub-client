import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ServerUrl,
  withCredentials: true
});

const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(authContext);

  axiosInstance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
       
         navigate("/");
        await logOut(); 
        toast.error("You Need To Login first")
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosPrivate;
