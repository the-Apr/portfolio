<template>
  <div>
    <loading v-if="!showContent"/>
    <div class="app">
      
      <navigation />

      <div  class="loading-spinner">
       
      </div>

      <transition name="scale-fade" mode="out-in" >
        <div v-if="showContent">
          <div id="home" class="section" ref="home">
            <home-view/>
          </div>
          <div id="about" class="section" ref="about">
            <about/>
          </div>
          <div id="work" class="section" ref="work">
            <work/>
          </div>
        </div>
      </transition>
      
      <div id="contact">
        <foot-note/>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex';

import Navigation from '@/components/Navigation.vue';
import About from '@/views/About.vue';
import FootNote from '@/components/FootNote.vue'
import HomeView from './views/HomeView.vue';
import Work from './views/Work.vue';
import Loading from './components/Loading.vue';


export default {
  name: 'app',

  components: {
    Navigation,
    About,
    FootNote,
    HomeView,
    Work,
    Loading
  },

  data() {
    return {
      showContent: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 1000);
  },

  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // ...mapActions(['scrollToSection']),
  },
}
</script>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Montserrat:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

.app {
  min-height: 100vh;
  // background-color: #1f1f23;
  background-color: #18181a;
}

.section {
  @apply pt-8;

  @screen md {
    @apply pt-20
  }
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