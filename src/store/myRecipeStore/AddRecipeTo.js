import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase"

export const saveRecipe = async (e) => {


    await setDoc(doc(db, "receipes", e.title), {
        title: e.title,
        description: e.description,
        ingredients: e.ingredients,
      });
}

