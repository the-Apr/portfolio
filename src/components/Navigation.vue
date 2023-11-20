<template>
<div class="top-most">
<header>
  <nav class="nav-wrap">
    <div class="branding">
      <router-link @click="scrollToSection('home')" class="link" :to="{name: 'home'}">Portfolio</router-link>
    </div>
    <div class="nav-links">
      <ul v-show="!mobile">
               
        <li @click="scrollToSection('about')">
          <router-link class="link" :to="{name: 'about'}">About</router-link>
        </li>

        <li @click="scrollToSection('work')">
          <router-link class="link" :to="{ name: 'project' }">Work</router-link>
        </li>
      
        <router-link class="link" :to="{}">
          <nav-button />
        </router-link>
        
      </ul>
    </div>
  </nav>


  <fa-icon 
    :icon="['fas', 'bars']" 
    class="menu-icon" 
    @click="toggleNav" 
    v-show="mobile"
  />
  <transition name="mobile-nav" >
    <div v-show="mobileNav" ref="mobileWrap" @click="checkClick" class="mobile-wrap">
      <div class="mobile-nav">
        <ul>
          <li @click="mobileScrollToSection('about')">
            <router-link class="link" :to="{name: 'about'}">About</router-link>
          </li>

          <li @click="mobileScrollToSection('work')">
            <router-link class="link" :to="{ name: 'project' }">Work</router-link>
          </li>
        
          <!-- <router-link class="link" :to="{}">
            <nav-button />
          </router-link> -->
        </ul>

        <div class="socials">
          <a href="https://github.com/the-Apr" target="_blank">
            <fa-icon :icon="['fab', 'github']" class="icon" />
          </a>
          <a href="https://www.linkedin.com/in/praise-adebayo-6ab205235/" target="_blank">
            <fa-icon :icon="['fab', 'linkedin']" class="icon" />
          </a>
          <a href="mailto:praiseadebayo218@yahoo.com">
            <fa-icon :icon="['fas', 'envelope']" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </transition>
</header> 
</div>
</template>

<script>
// import { mapMutations, mapActions, mapState } from 'vuex';
import NavButton from '@/components/NavButton.vue'
export default {
  name: 'navigation',

  components: {
    NavButton,
  },

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    // ...mapMutations(['toggleNav']),

    // ...mapActions([ 'mobileScrollToSection']),

    toggleNav() {
      this.mobileNav = !this.mobileNav
    },

    scrollToSection(sectionId) {
      this.$root.scrollToSection(sectionId);
    },
    
    mobileScrollToSection(sectionId) {
      this.$root.scrollToSection(sectionId);
      this.toggleNav();
    },

    checkClick(e) {
      if(e.target === this.$refs.mobileWrap) {
        this.toggleNav();
      }
    },
  },

  computed : {
    // ...mapState(['mobileNav'])
  }

}
</script>

<style lang="scss" scoped>
// .top-most {
//   @apply fixed top-0 left-0 w-full;
//   z-index: 99;
// }
header {
  @apply py-0 px-3 text-white;
  z-index: 99;
  border-bottom: 1px solid #4238c9;
  // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

  @screen lg {
    @apply px-14
  }

  .nav-wrap {
    @apply px-4 mx-4;
  }
}
 ul{
  @apply list-none cursor-pointer;
 }

.link{
  @apply font-medium py-0 px-2 no-underline;
  transition: .3s color ease-in;

  &:hover {
    color: #4238c9;
  }
}

nav {
  @apply flex py-3 h-16;

  @screen md{
    @apply py-6 h-24;
  }

  .nav-links {
    @apply relative flex items-center justify-end flex-1;

    ul {
    @apply flex gap-6 items-center;

      // .link {
      //   margin-right: 32px;
      //   font-size: 17px
      // }
      // .link:last-child {
      //   margin-right: 0;
      // }
    }
  }
}


.branding {
  @apply flex items-center;
}


.menu-icon {
  @apply cursor-pointer absolute top-4 right-10 h-6 w-auto;

  @media (min-width: 768px) {
    top: 32px;
    right: 54px;

  }
}

.mobile-wrap {
  @apply fixed top-0 left-0 w-full bg-transparent;
  height: 100vh;
  z-index: 3;
}

.mobile-nav {
  @apply p-10 w-4/6 flex flex-col justify-between h-full;
  max-width: 250px;
  // background-color: #4b4b4f;
  background-color: #1f1f23;
  box-shadow: 7px 0px 11px 5px rgba(0, 0, 0, 0.1);

  ul{
    @apply flex flex-col gap-y-6
  }

  .link {
    @apply p-3 text-white
  }

  .socials {
    @apply justify-self-end flex gap-4;
  }
}
 
// animation
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
