import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.init";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user , setUser] = useState(null)
const [loading , setLoading] = useState(true)
// google provider
const provider = new GoogleAuthProvider();
// google sign In
const handleGoogleSignIn=()=>{
    setLoading(true)
  return signInWithPopup(auth,provider)
}
// sign out 
const handleSignOut = ()=>{
    setLoading(true)
   return signOut(auth)
}
// observer
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser)
         setLoading(false)
         console.log('current user==>',currentUser);
        }
         else {
            setUser(null)
        setLoading(false)
            } 
          });
          return ()=>{
            unsubscribe()
        }
},[])


const authInfo={
    handleGoogleSignIn,
    user,
    setUser,
    handleSignOut,
    loading,
    setLoading
}

    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;