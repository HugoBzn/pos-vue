<script setup>
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useFirebaseStorage, useFirestore } from 'vuefire';
import { products } from '../../data/products';

const storage = useFirebaseStorage();

const db = useFirestore();

async function seedDB() {
  const productsCollection = collection(db, 'products');

  for (let i = 1; i < products.length; i++) {
    const url = await getDownloadURL(ref(storage, `products/producto${i}.jpg`));

    addDoc(productsCollection, {
      name: products[i - 1].name,
      price: products[i - 1].price,
      availability: products[i - 1].availability,
      category: products[i - 1].category,
      image: url,
    })
      .then(() => {
        console.log('Producto Agregado...');
      })
      .catch((error) => {
        console.error(error);
      });

    if (i === products.length - 1) {
      alert('Se subieron los Productos');
    }
  }
}

const handleSubmit = (data) => {
  const urls = [];
  data.images.forEach((fileItem) => {
    const storageRef = ref(storage, '/products');

    // Upload the file to Firebase Storage
    const uploadTask = uploadBytesResumable(ref(storageRef, fileItem.name), fileItem.file);

    // Monitor the upload progress and retrieve the download URL
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Upload progress can be monitored here
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload is complete, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          urls.push(downloadURL);
          if (urls.length === data.images.length) {
            alert('Se subieron las imágenes');
          }
        });
      }
    );
  });
};
</script>

<template>
  <div>
    <Link to="products"> Volver </Link>

    <h1 class="text-4xl font-extrabold px-5 md:px-10 pb-10">Seeder</h1>

    <div class="flex justify-center bg-slate-100 bg-opacity-20 rounded shadow mx-5 md:mx-64">
      <div class="mx-auto p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          submit-label="Agregar Imágenes"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
        >
          <FormKit type="file" multiple="true" name="images" />
        </FormKit>

        <div class="mt-10">
          <FormKit
            type="form"
            submit-label="Agregar Productos"
            incomplete-message="No se pudo enviar, revisa los mensajes"
            @submit="seedDB"
          >
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>
