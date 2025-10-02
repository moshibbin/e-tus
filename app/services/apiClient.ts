import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/db";

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAllBySite = async () => {
    const q = query(collection(db, this.endPoint));
    const querySnapshot = await getDocs(q);
    const data: T[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as T),
    }));

    return data;
  };

  // getAll = async (userId: string) => {
  //   const q = query(
  //     collection(db, this.endPoint),
  //     where("userId", "==", userId)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   const data: T[] = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...(doc.data() as T),
  //   }));

  //   return data;
  // };

  getAll = async () => {
    const q = query(collection(db, this.endPoint));
    const querySnapshot = await getDocs(q);
    const data: T[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as T),
    }));

    return data;
  };

  post = async (data: any) => {
    await addDoc(collection(db, this.endPoint), data);
  };

  update = async (id: string, data: any) => {
    const docRef = doc(db, this.endPoint, id);
    await updateDoc(docRef, data);
  };

  delete = async (id: string) => {
    const docRef = doc(db, this.endPoint, id);
    await deleteDoc(docRef);
  };
}

export default APIClient;
