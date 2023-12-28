<template>
<div class="top-most">
<header>
  <nav class="nav-wrap">
    <div class="branding">
      <router-link @click="scrollToSection('home')" class="link" :to="{name: 'home'}">Praise Portfolio</router-link>
    </div>
    <div class="nav-links">
      <ul v-show="!mobile">
               
        <li @click="scrollToSection('about')">
          <router-link class="link" :to="{name: 'about'}">About</router-link>
        </li>

        <li @click="scrollToSection('work')">
          <router-link class="link" :to="{ name: 'project' }">Work</router-link>
        </li>
      
        <a href="mailto:praiseadebayo218@yahoo.com">
          <nav-button />
        </a>
        
      </ul>
    </div>
  </nav>

  <!-- mobile navigation -->
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
          <!-- <router-link  :to="{name: 'about'}" @click="mobileScrollToSection('about')" class="link">Abut</router-link> -->
          

          <li @click="mobileScrollToSection('home')"  class="link mobile-link">
            <fa-icon :icon="['fas', 'house']" />
            <router-link :to="{ name: 'home' }">About</router-link>
          </li>

          <li @click="mobileScrollToSection('about')"  class="link mobile-link">
            <fa-icon :icon="['far', 'address-card']" />
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>

          <li @click="mobileScrollToSection('work')"  class="link mobile-link">
            <fa-icon :icon="['fas', 'bars-progress']" />
            <router-link :to="{ name: 'project' }">Work</router-link>
          </li>
        
          <li class="link mobile-link">
            <fa-icon :icon="['fas', 'phone']" />
            <p>Contact</p>
          </li>
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
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        // Prevent scrolling when the mobile nav is active
        document.body.style.overflow = 'hidden';
      } else {
        // Restore scrolling when the mobile nav is closed
        document.body.style.overflow = '';
      }
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
.top-most {
  @apply sticky top-0 left-0 w-full bg-inherit;
  z-index: 999;
}
header {
  @apply py-3 px-3 text-white mb-4;
  border-bottom: 1px solid #4238c9;
  // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

  @screen md {
    @apply py-1
  }
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

a{
  @apply no-underline;
}

.link{
  @apply font-medium py-0 px-2 ;
  transition: .3s color ease-in;

  &:hover {
    color: #4238c9;
  }
}

nav {
  @apply flex py-3 h-14;

  @screen md{
    @apply py-3 h-24;
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
  a{
    @apply text-xl tracking-wider;
    font-family: 'Dancing Script', cursive;

    @screen md {
      @apply text-2xl
    }
  }
}


.menu-icon {
  @apply cursor-pointer absolute top-6 right-10 h-8 w-auto;

  @media (min-width: 768px) {
    top: 35px;
    right: 54px;

  }
}

.mobile-wrap {
  @apply fixed top-0 left-0 w-full bg-transparent;
  height: 100%;
  z-index: 3;
}

.mobile-nav {
  @apply p-6 w-4/6 flex flex-col justify-between h-full;
  max-width: 250px;
  // background-color: #4b4b4f;
  background-color: #1f1f23;
  box-shadow: 7px 0px 11px 5px rgba(0, 0, 0, 0.1);

  ul{
    @apply flex flex-col gap-y-2
  }

  .link {
    @apply p-1
  }

  .mobile-link {
    @apply flex gap-6 items-center
  }

  .socials {
    @apply justify-center flex gap-4;
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
