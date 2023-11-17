<template>
  <div>
    <div class="app">
      <navigation />
        <router-view/>
      
      <foot-note/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import About from '@/views/About.vue';
import FootNote from '@/components/FootNote.vue'


export default {
  name: 'app',

  components: {
    Navigation,
    About,
    FootNote
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

.app {
  min-height: 100vh;
  background-color: #1f1f23;
}
</style>