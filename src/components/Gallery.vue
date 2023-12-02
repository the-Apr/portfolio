<template>
  <div class="gallery-item" :class="{ fullscreen: isFullScreen }">

    <img :src="require(`../assets/display/${photo.pic}`)" alt="images" @click="toggleFullScreen">
    <fa-icon v-show="isFullScreen" @click="toggleFullScreen" :icon="['fas', 'times']" class="icon"/>
  </div>
</template>

<script>
export default {
  name: 'gallery',

  props: ['photo'],

  data() {
    return {
      isFullScreen: false
    }
  },

  methods: {
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-item {
  @apply relative;

  img {
    @apply w-full block object-cover rounded-lg cursor-pointer transition-transform;
    max-height: 400px;
    height: 250px;

    &:hover {
      transform: rotateZ(-2deg) scale(1.01);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      filter: brightness(70%) saturate(70%);
    }
  }

  &.fullscreen {
    img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: none;
      z-index: 1000;
      filter: none;
      transform: none;
    }

    .icon {
      @apply cursor-pointer top-6 right-10 h-8 w-8 fixed bg-[#272729] p-2;
      border-radius: 50%;
      z-index: 1001;
    }    
  }

  
}
</style>
