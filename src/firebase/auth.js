import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase";
import { createUserWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (EmailAuthCredential, password) => {
    return createUserWithEmailAndPassword(auth,EmailAuthCredential,password);
};
export const doSignInUserWithEmailAndPassword = async (EmailAuthCredential, password) => {
    return signInUserWithEmailAndPassword(auth,EmailAuthCredential,password);
};

export const doSignInWithGoogle = async () => {
 const provider = new GoogleAuthProvider();
 const result = await signInWithPopup(auth,provider);
 //result.user
 return result;
};

export const doSignOut = () => {
    return auth.signOut();
}

