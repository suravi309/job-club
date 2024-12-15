import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/Firebase.init'
import { onAuthStateChanged } from "firebase/auth/cordova";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import {  signOut } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
  }


  useEffect(() =>{
   const unsubcribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log('state captured', currentUser)
      setLoading(false);
    })
    return ()=>{
      unsubcribe();
    }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    signOutUser
  }; 

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


