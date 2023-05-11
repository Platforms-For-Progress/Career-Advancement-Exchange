import { firestore } from ".";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";


export const setRequest = async (collection, id, data) => {
    console.log('setRequest', collection, id, data);
    console.log('firestore', firestore);
    await setDoc(doc(firestore, collection, id), {data});
    // console.log('userRef', userRef);
    }

export const checkIfDocExists = async (collection, id) => {
    const docRef = doc(firestore, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return true;
    } else {
        console.log("No such document!");
        console.log("false")
        return false;
    }
}
