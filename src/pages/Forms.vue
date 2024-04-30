<template>
  <q-page class="q-ma-md">
   
   <span class="">Forms</span>
   <q-separator spaced />

   <div class="row">
    <div class="col-6">
      <div class="q-pa-md" style="max-width: 400px">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="name"
            label="Your name *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
          />

          <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real age'
            ]"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>

        </div>
    </div>
   </div>
   
   

  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'Forms',
  
  
})
</script>
