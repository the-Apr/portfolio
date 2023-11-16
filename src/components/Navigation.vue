<template>
<header>
  <nav class="lg:container">
    <div class="branding">
      <router-link class="link" :to="{name: 'home'}">Portfolio</router-link>
    </div>
    <div class="nav-links">
      <ul v-show="!mobile">
        <router-link class="link" :to="{name: 'about'}">About</router-link>
        <router-link class="link" :to="{name: 'project'}">Work</router-link>
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
    <ul v-show="mobileNav" class="mobile-nav">
      <router-link class="link" :to="{}">Home</router-link>
      <router-link class="link" :to="{}">Blogs</router-link>
      <router-link class="link" to="#">Create Post</router-link>
    </ul>
  </transition>
</header> 
</template>

<script>
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

    toggleNav() {
      this.mobileNav = !this.mobileNav
    },
  },

  computed : {
  }

}
</script>

<style lang="scss" scoped>
header {
  @apply py-0 px-14 text-white;
  z-index: 99;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;
}

.link{
  @apply font-medium py-0 px-2 no-underline;
  transition: .3s color ease-in;

  &:hover {
    color: #1eb8b8;
  }
}

nav {
  @apply flex py-3 h-16 ;

  @screen md{
    @apply py-6 h-24;
  }

  .nav-links {
    @apply relative flex items-center justify-end flex-1;

    ul {
    @apply flex items-center;

      .link {
        margin-right: 32px;
        font-size: 17px
      }
      .link:last-child {
        margin-right: 0;
      }
    }
  }
}


.branding {
  @apply flex items-center;
}


.menu-icon {
  @apply cursor-pointer absolute top-4 right-6 h-6 w-auto;

  @media (min-width: 768px) {
    top: 32px;
    right: 54px;

  }
}

.mobile-nav {
  @apply p-5 w-4/6 flex flex-col fixed h-full top-0 left-0;
  max-width: 250px;
  background-color: #4b4b4f;
  z-index: 99;

  .link {
    @apply py-4 text-white
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
