<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />
    <p class="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut neque debitis cumque, eaque tempore consectetur! Nulla dolorum similique animi ad rem consequatur at quam! Accusantium vel tenetur nihil debitis.</p>
    <p class="text-body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse, totam quisquam rem quas dolores accusamus ut doloribus ex incidunt, ipsa dolore tenetur reprehenderit dignissimos ipsam sequi neque voluptates minus!</p>
    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 1</span>

    <q-btn
    color="primary"
    :label="sideMenuOpen ? 'Cerrar menú lateral' :'Abrir menú lateral'"
    class="q-mt-md"
    @click="toggleSideMenu"
    ></q-btn>

  </q-page>
</template>

<script >
import useUI from 'src/composables/useUI';
import { defineComponent } from 'vue'
const { sideMenuOpen } = useUI()

export default defineComponent({
  name: 'Typography',
  setup(){
    const { sideMenuOpen,toggleSideMenu } = useUI()

    return{
      sideMenuOpen,
      toggleSideMenu
    }
  }
  
})
</script>
