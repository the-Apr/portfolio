<template>
  <div class="home">
    <section class="home-wrap">
      <div class="welcome-note">
        <div class="left">
          <div class="text">
            <h1>Hello there, <br> Welcome to my hub </h1>
            <p>Embark on a journey to explore the boundless realms of aesthetics and innovation. Uncover the tapestry of creativity woven with pixels, passion, and purpose. <br>Let's transform ideas into immersive experiences!</p>
          </div>
          <div class="action-btn">
            <button class="my-works">My Works</button>
            <button class="chat"> Contact Me</button>
          </div>
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
    @apply container
  }

  .welcome-note {
    @apply flex flex-col justify-center mx-auto  items-center gap-24 mt-16  mb-6;
    @screen lg {
      @apply flex-row gap-12 mt-32 mb-0
    }

    .left {
      @apply flex flex-col gap-4 justify-center;

      @screen lg{
        @apply justify-start items-start gap-8 w-1/2;
      }

      .text {
        @apply flex flex-col gap-4;

        h1 {
        @apply  text-4xl font-bold leading-[50px];

        &:nth-child(2) {
          margin-top: 10px
        }

        @screen md {
          @apply text-[60px] tracking-[0.32px] font-bold leading-[70px];
        }
        }
        p{
          @apply  text-base font-light tracking-wider leading-6 text-[#aeadb0];

          @screen md {
            @apply leading-8 text-lg;
          }
        }
      }
     

      .action-btn {
        @apply flex flex-row gap-10 mt-4;

        button {
          @apply px-8 py-3 border-none rounded-3xl max-w-[200px]
        }
        .my-works {
          @apply bg-[#4238c9]
        }
        .chat {
          @apply bg-[#1f1f23];
          border: 1px solid #4238c9
        }
      }
    }

    .right {
      @apply flex justify-center w-full shadow-sm ;
      max-height: 500px; 

      @screen lg {
        @apply mb-0 w-1/2 ;
      }
      img {
        @apply  block object-cover rounded-lg w-full;
        max-height: 400px;
        
        @screen lg {
          min-height: 300px;
          max-height: 600px;
        }

      }
    }
  }
}
</style>
