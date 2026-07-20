//the heart of my authentication system

import React, { useContext,useEffect, useState } from "react";
import {auth} from "@/firebase/firebase" //my authentication assistant

//firebase authentication functions
import { 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";

 const ADMIN_EMAIL = "anna.imaninaitore1726@gmail.com";

const AuthContext = React.createContext();//empty authentication storage /empty office

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}) {
    const[currentUser,setCurrentUser] = useState(null);
    const[userLoggedIn,setUserLoggedIn] = useState(false);
    const[loading,setLoading] = useState(true);
    const isAdmin = currentUser?.email === ADMIN_EMAIL;
    
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
},[])

async function initializeUser(user){
    if(user){
        setCurrentUser({...user});
        setUserLoggedIn(true);
    }else{
        setCurrentUser(null);
        setUserLoggedIn(false);
    }
    setLoading(false);
}
//register
async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
//login
async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

//logout
async function logout() {
  return signOut(auth);
}

const value = {
    currentUser,
    userLoggedIn,
    loading,
    isAdmin,
    register,
    login,
    logout,
};

//says share everything
return(
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}