import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from './../Hooks/useAxiosPublic';




export const authContext = createContext();


const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const provider = new GoogleAuthProvider();
  const googleLoginBtn =()=>{
     
      setLoading(true)
      return signInWithPopup(auth,provider)
      
  }

  const userProfileUpdate = (name,path)=>{
    const userData = {
        displayName:name,
        photoURL: path
    }
    return updateProfile (auth.currentUser,userData)
}


  useEffect(()=>{
    const unRegister = onAuthStateChanged(auth,async(currentUser)=>{
        setUser(currentUser)
         if(currentUser){
          const user = {
            email : currentUser?.email
          }
          await axiosPublic.post('/jwt',user,{withCredentials:true})
         }
         else{
          await axiosPublic.post('/logout',{},{withCredentials:true})
          setLoading(false)
         }
        setLoading(false)
    })

    return ()=>{
        unRegister()
    }

},[axiosPublic])

const logOut = ()=>{
  setLoading(false)
  return signOut(auth)
}

  const authInfo = {
    registerUser,
    user,
    loading,
    loginUser,
    googleLoginBtn,
    userProfileUpdate,
    logOut
    
    

  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
