import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const colRef = collection(projectFirestore, collectionName);
    const unsubCol = onSnapshot(colRef, (snapshot) => {
      let documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubCol();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
};

export default useFirestore;
