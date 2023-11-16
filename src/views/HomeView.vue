<template>
  <div class="home">
    <section class="home-wrap">
      <div class="welcome-note">
        <div class="left">
          <h1>Hello there,</h1>
          <h1> Welcome to my hub </h1>
          <p>Explore the goodness of aesthetics and creativity</p>
        </div>
        <div class="right">
          <img src="../assets/work1.jpg" alt="welcome image">
        </div>
      </div>
    </section>    
  </div>
 
</template>

<script>

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  },

  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrap {
  @apply px-5 relative;

  @screen md {
    @apply mx-10 px-10;
  }
  @screen lg{
  }

  .welcome-note {
    @apply flex flex-col justify-center mx-auto  items-center gap-24 mt-16  mb-6;
    @screen lg {
      @apply flex-row gap-12 mt-32 mb-0
    }

    .left {
      @apply flex flex-1 flex-col justify-center w-full;

      @screen lg{
        @apply justify-start items-start gap-3 w-1/2;
      }

      h1 {
        @apply  text-4xl font-bold leading-6;

        &:nth-child(2) {
          margin-top: 10px
        }

        @screen md {
          @apply text-6xl tracking-[0.32px] font-bold leading-10;
        }
      }
      p{
        @apply  mt-5 text-base font-light tracking-widest leading-8 ;

        @screen md {
          @apply tracking-widest leading-8 text-xl;
        }
      }
    }

    .right {
      @apply flex justify-center flex-1 w-full shadow-sm ;
      max-height: 500px; 

      @screen lg {
        @apply mb-0 w-1/2 ;
      }
      img {
        @apply  block object-cover rounded-lg;
        max-height: 500px;
        min-width: 600px;
        
        @screen lg {
          min-height: 300px;
          max-height: 700px;
        }

      }
    }
  }
}
</style>
