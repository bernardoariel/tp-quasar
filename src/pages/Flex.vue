<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col col-6 bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row q-mb-md justify-between">
      <div class="col-12 col-md-6 bg-primary">1</div>
      <div class="col-12 col-md-6 bg-secondary">2</div>
     
    </div>
    <q-separator spaced/>

    <div class="row q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-between  q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-end  q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-around  q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column items-center bg-dark q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column items-end bg-dark q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column custom-height items-center justify-center bg-dark q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column custom-height items-center justify-between  bg-dark q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column custom-height items-center justify-between  bg-dark q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box self-end bg-secondary"></div>
      <div class="square-box self-start bg-accent"></div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
.col, .col-4, .col-6, .col-12{
  height: 50px;
}
.square-box{
  height:50px;
  width:50px;
}
.custom-height{
  height: 300px;
}
</style>
