<template>
  <div>
    <div class="app">
      <navigation />

      <transition name="scale-fade" mode="out-in" >
        <div v-if="showContent">
          <div id="home" class="section">
            <home-view/>
          </div>
          <div id="about" class="section">
            <about/>
          </div>
          <div id="work" class="section">
            <work/>
          </div>
        </div>
      </transition>
      
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

  data() {
    return {
      showContent: false,
    }
  },

  mounted() {
    this.showContent = true;
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

.section {
  @apply pt-6;
}

.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.scale-fade-enter-from {
  /* transform: scale(0.8); */
  transform: translateY(20px);
  opacity: 0;
}
</style>