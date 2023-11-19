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
        
        <div class="gallery-wrap">
          <img src="../assets/work1.jpg" alt="" class="md:col-span-2">
          <img src="../assets/work2.jpg" alt="">
          <img src="../assets/work3.jpg" alt="">
          <img src="../assets/work3.jpg" alt="">
          <img src="../assets/work1.jpg" alt="" class="md:col-span-2 lg:col-span-3">
          <img src="../assets/work2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply px-5  mt-20;

  @screen md {
    @apply px-10
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

        img{
          @apply w-full block object-cover rounded-lg;
          max-height: 400px;
          height: 250px;
          transition: filter 0.5s;
        
         @screen md {
          height: 100%;

          &:hover {
            transform: rotateZ(-1deg) scale(1.01);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            // filter: grayscale(100%);
            filter: brightness(70%) saturate(70%);
          }
        }
        }
      }
    }
  }
}
</style>


<script>
import NavButton from '@/components/NavButton.vue';

export default {
  name: 'about',

  components: {
    NavButton,
  }

}
</script>