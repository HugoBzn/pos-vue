import { useFirebaseStorage } from 'vuefire';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { uid } from 'uid';

export default function useImage() {
  const storage = useFirebaseStorage();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const filename = uid() + '.jpg';
    const sRef = storageRef(storage, '/products/' + filename);

    const uploadTask = uploadBytesResumable(sRef, file);

    uploadTask.on(
      'state_changed',
      () => {},
      (error) => console.log(error),
      () => {
        // Upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
        });
      }
    );
  };

  return {
    onFileChange,
  };
}
