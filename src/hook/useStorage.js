import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../FireBase/config'

// Upload ảnh lên Storage và Firestore

function useStorage(file) {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references Storage
        const storageRef = projectStorage.ref(file.name);  // => Lưu file là tên ảnh
        // references Firestore
        const collectionRef = projectFirestore.collection('images'); // => Lưu collection là images

        // Upload file lên
        storageRef.put(file).on('state_changed', (snap) => {
            // Tỉ lệ phần trăm
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // Upload file ảnh lên Storage
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            // Upload file ảnh lên Firestore
            const createAt = timestamp();
            const updateAt = timestamp();
            collectionRef.add({name: file.name, size: file.size, url: url, createAt: createAt, updateAt: updateAt});
        })
    }, [file])

    return {progress, error, url};

}

export default useStorage;
