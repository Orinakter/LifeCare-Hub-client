import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";



export const authContext = createContext();


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    
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
    const unRegister = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return ()=>{
        unRegister()
    }

},[])

const logOut = ()=>{
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
