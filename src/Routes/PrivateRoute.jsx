import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import Loader from '../Components/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;