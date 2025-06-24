import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut ,GoogleAuthProvider,signInWithPopup,GithubAuthProvider,updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
export const authcontext=createContext()
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setloader]=useState(true)
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const creatuser=(email,password)=>{
        setloader(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin=(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signout=()=>{
        setloader(true)
        return signOut(auth);
    }
    const updateuserprofile = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    })
    .then(() => {
    setuser({ ...auth.currentUser });
  });
  };
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            setloader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const loginwithgoogle=()=>{
        setloader(true)
        return signInWithPopup(auth,googleprovider)
    }
    const loginwithgithub=()=>{
        setloader(true);
        return signInWithPopup(auth, githubprovider)
    }
    const authinfo={
        creatuser,
        signin,
        signout,
        loginwithgoogle,
        loginwithgithub,
        updateuserprofile,
        user,
        loader
    }
    return (
        <authcontext.Provider value={authinfo}>
                 {children}
        </authcontext.Provider>
    );
};

export default Authprovider;