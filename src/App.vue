<template>
  <div>
    <div class="app">
      <!-- <navigation />
        <router-view/>
        <home-view/>
        <about/>
        <work/>
      
      <foot-note/> -->

      <navigation />
      <div id="home" class="section">
        <home-view/>
      </div>
      <div id="about" class="section">
        <about/>
      </div>
      <div id="work" class="section">
        <work/>
      </div>
      <!-- Add more sections as needed -->
      <foot-note/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import About from '@/views/About.vue';
import FootNote from '@/components/FootNote.vue'
import HomeView from './views/HomeView.vue';
import Work from './views/Work.vue';


export default {
  name: 'app',

  components: {
    Navigation,
    About,
    FootNote,
    HomeView,
    Work
  },

  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
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