import { useState, useEffect } from "react";
import { projectFirestore } from '../FireBase/config'

function useFireStore(collection) {

    const [docs,setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createAt','desc')
            .onSnapshot((snap) => {
                let documents = [];
                // snap là toàn bộ các document trong firestorage
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id}); // ...doc.data() là toàn bộ các trường field (name,size,url,createAt,updateAt) của từng id.
                });
                setDocs(documents);
            })
        // clean up
        return () => unsub();
    }, [collection]);

    return { docs };
}

export default useFireStore;
