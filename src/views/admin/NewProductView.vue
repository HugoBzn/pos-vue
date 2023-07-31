<script setup>
import Link from '@/components/Link.vue';
import useImage from '../../composables/useImage';

const { url, onFileChange, isImageUpladed } = useImage();
</script>

<template>
  <div class="px-5">
    <Link to="products">Volver</Link>
    <h1 class="text-4xl my-5">Nuevo producto</h1>

    <div class="flex justify-center shadow bg-slate-100 bg-opacity-20 rounded lg:mr-20">
      <div class="p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          submit-label="Agregar producto"
          incomplete-message="Hay algo incorrecto, revisa los mensajes"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del producto"
            validation="required"
            :validation-messages="{ required: 'El nombre del producto es obligatorio' }"
          />

          <FormKit
            type="file"
            label="Imagen producto"
            name="image"
            validation="required"
            :validation-messages="{ required: 'La imagen del producto es obligatoria' }"
            accept=".jpg"
            multiple="true"
            @change="onFileChange"
          />
          <div v-if="isImageUpladed">
            <p class="font-black">Imagen producto:</p>
            <img :src="url" alt="Nueva imagen producto" class="w-32 rounded-lg" />
          </div>

          <FormKit
            type="select"
            label="Categoría"
            name="category"
            validation="required"
            :validation-messages="{ required: 'La categoría es obligatoria' }"
            :options="[1, 2, 3]"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
            validation="required"
            :validation-messages="{ required: 'El precio es obligatorio' }"
            min="1"
          />

          <FormKit
            type="number"
            label="Disponibles"
            name="availability"
            placeholder="Cantidad disponible"
            validation="required"
            :validation-messages="{ required: 'La cantidad es obligatoria' }"
            min="1"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
