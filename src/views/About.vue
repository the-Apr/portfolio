<template>
  <div class="about" id="about">
    <div class="about-wrap">
      <div class="left">
        <h3>INTRODUCTION</h3>
        <h1>Overview</h1>
        <p>Hi there! 👋 I'm a passionate Vue.js developer who thrives on transforming creative ideas into beautifully functional web solutions. </p>
        <p>I wield technologies like Vue.js, Tailwind CSS, JavaScript, and Bootstrap to craft stunning, user-friendly interfaces. With Firebase by my side, I breathe life into web applications that both captivate and inspire. </p>
        <p>If you're seeking a developer who loves turning visions into reality, you're in the right place! Let's create something amazing together. 🚀</p>
      </div>

      <div class="right">
        <h1>Gallery</h1>
        
        <!-- <div class="gallery-wrap">
          <img 
          :src="require(`../assets/display/${photo.pic}`)" alt="" 
          v-for="(photo, index) in galleryPhotos" :key="index"
          @click="toggleFullScreen">

          <fa-icon :icon="['far', 'xmark']"  class="icon"/>

        </div> -->
        <div class="gallery-wrap">
        <gallery class="gallery" :photo= "photo" v-for="(photo, index) in galleryPhotos" :key="index"></gallery>
       </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply px-5  mt-10;

  @screen md {
    @apply px-10 mt-10 py-10
  }

  .about-wrap {
    @apply relative flex flex-col gap-10;

    @screen md {
      @apply px-10;
    }
    @screen lg{
      @apply container
    }

    .left {
      @apply flex flex-col justify-center;

      h3{
        @apply tracking-wide;
        color: #8c8b8e;
      }

      h1{
        @apply tracking-widest text-4xl mb-5 mt-2
      }

       p{
        @apply  text-base font-light tracking-wider leading-6 text-[#d0c5d1] mb-2;

        @screen md {
          @apply tracking-wider leading-8 text-lg;
        }
      }
    }

    .right{
      @apply py-6 flex flex-col;

      h1{
        @apply tracking-widest text-4xl mb-5 mt-2
      }
      
      .gallery-wrap {
        @apply w-full grid grid-cols-1 grid-flow-dense gap-5 mt-10;

        @screen md {
          @apply grid-cols-2
        }
        @screen lg {
          @apply grid-cols-3
        }

        .gallery:nth-child(2),
        .gallery:nth-child(3),
        .gallery:nth-child(7),
        .gallery:nth-child(5){
          @screen md {
            @apply col-span-2
          }
        }

        // &:nth-last-child(1) {
        //   @screen md {
        //     @apply row-start-2 row-end-4
        //   }
        // }

      }
    }
  }
}
</style>


<script>
import NavButton from '@/components/NavButton.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'about',

  data() {
    return {
      galleryPhotos: [
        {pic: "Blog_1.png"},
        {pic: "Blog_2.png"},
        {pic: "Blog_3.png"},
        {pic: "invoice_1.png"},
        {pic: "invoice_2.png"},
        {pic: "invoice_3.png"},
        {pic: "rs_1.png"},
        {pic: "rs_2.png"},
        {pic: "url_1.jpeg"},
        {pic: "url_2.jpeg"},
        {pic: "todo_1.jpeg"},
      ]
    }
  },

  components: {
    NavButton,
    Gallery
  },

  // methods: {
  //   toggleFullScreen(event) {
  //     event.target.classList.toggle('fullscreen');
  //   },
  // }

}
</script>