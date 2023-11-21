<template>
  <div class="work">
    <div class="work-wrap">
      <div class="left">
        <h3>MY WORK</h3>
        <h1>Projects</h1>
        <p>Embarking on a journey through diverse realms of creativity, my portfolio stands as a testament to a tapestry woven with passion and purpose. Over the years, I've immersed myself in a spectrum of projects, spanning the realms of client collaborations and personal endeavors.</p>
        <!-- <p>From the intricate dance of code in web development to the vibrant strokes of design, each project etches a unique chapter in my creative odyssey. These works are more than pixels and lines; they embody a relentless pursuit of excellence, a symphony of innovation, and a commitment to transforming ideas into immersive experiences. </p> -->
        <p>Explore this curated collection, and join me on a visual voyage that transcends the ordinary.</p>
      </div>

      <div class="right">
        <div class="explore">
          <span>Explore </span>
          <h3>My Recent Projects</h3>
        </div>

        <div class="projectcard-wrap">
          <project-card  :post="post" v-for="(post, index) in sampleBlogCards" :key="index"></project-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
 name: 'work',

 components: {
  ProjectCard
 },

 data() {
  return {
    sampleBlogCards: [
      { blogTitle: " Card #1", blogCoverPhoto: "work1", blogDate: "May 1, 2021" },
      { blogTitle: "Blog Card #2", blogCoverPhoto: "work2", blogDate: "May 7, 2021" },
      { blogTitle: "Blog Card #3", blogCoverPhoto: "work3", blogDate: "May 4, 2021" },
      { blogTitle: "Blog Card #4", blogCoverPhoto: "work1", blogDate: "May 4, 2023" },
    ],
  }
 }
}
</script>

<style lang="scss" scoped>
.work {
  @apply px-5  mt-10;

  @screen md {
    @apply py-10
  }

  .work-wrap {
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
        @apply tracking-widest text-4xl mb-5 mt-2;
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

      .explore {
        @apply flex flex-col gap-4 justify-center items-center  align-middle mb-5 mt-2;

        @screen sm {
          @apply flex-row
        }

        h3{
          @apply tracking-widest text-2xl;
        }
        span{
          font-weight: 800;
          font-size: 40px;
          color: #4737ce;
          // color: #4238c9;
        }
      }


      .projectcard-wrap {
        @apply w-full grid grid-cols-1 grid-flow-dense gap-5 mt-5;

        @screen md {
          @apply grid-cols-2
        }
        @screen lg {
          @apply grid-cols-3
        }
      }
    }
  }
}
</style>