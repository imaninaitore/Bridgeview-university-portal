//manager for programme operations- 
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { db } from "@/firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ProgrammeContext = createContext();//the empty storage

//custom hook used in other pages
export function useProgrammes() {
  return useContext(ProgrammeContext);
}

//create provider that wraps the application
export function ProgrammeProvider({ children }) {
  const [programmes, setProgrammes] = useState([]); //memory
  const [loading, setLoading] = useState(true);

  const programmeCollection = collection(db, "programmes");//store to database

  // Load all programmes 

  const getProgrammes = async () => {
    try {
      const snapshot = await getDocs(programmeCollection);//load them first form firestore

      const data = snapshot.docs.map((doc) => ({ //map return
        id: doc.id,
        ...doc.data(),
      }));

      setProgrammes(data);//stores the data in a state so that every component can display them
    } catch (error) {
      console.error("Error loading programmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { //action to load
    getProgrammes();
  }, []);

  // Add Programme

  const addProgramme = async (programme) => {
    try {
      const docRef = await addDoc(programmeCollection, programme);

      setProgrammes((prev) => [ //spread operator add to previous
        ...prev,
        {
          id: docRef.id,
          ...programme,
        },
      ]);
    } catch (error) {
      console.error("Error adding programme:", error);
    }
  };

  // // Update existing programme

  // const updateProgramme = async (id, updatedProgramme) => {
  //   try {
  //     const programmeDoc = doc(db, "programmes", id);

  //     await updateDoc(programmeDoc, updatedProgramme);

  //     setProgrammes((prev) =>
  //       prev.map((programme) =>
  //         programme.id === id
  //           ? { ...programme, ...updatedProgramme }
  //           : programme
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating programme:", error);
  //   }
  // };

  // Delete Programme

  const deleteProgramme = async (id) => {
    try {
      const programmeDoc = doc(db, "programmes", id); //find in firestore

      await deleteDoc(programmeDoc);

      setProgrammes((prev) =>
        prev.filter((programme) => programme.id !== id)
      );
    } catch (error) {
      console.error("Error deleting programme:", error);
    }
  };

  //what i want the components to have access to
  const value = {
    programmes,
    loading,
    getProgrammes,
    addProgramme,
  //updateProgramme,
    deleteProgramme,
  };


  return (
    <ProgrammeContext.Provider value={value}>
      {children}
    </ProgrammeContext.Provider>
  );
}