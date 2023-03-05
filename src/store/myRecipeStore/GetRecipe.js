import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const showRecipe = async (e) => {
  const querySnapshot = await getDocs(collection(db, "receipes"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
