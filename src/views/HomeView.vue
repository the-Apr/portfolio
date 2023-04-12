<template>
  <div class="">
    <section class="md:container px-8 relative">
      <div class="flex flex-col-reverse justify-center mx-auto md:flex-row items-center gap-4 md:gap-12 mt-4 md:mt-8 mb-6 md:mb-0">
        <div class="flex flex-1 flex-col justify-center md:justify-start items-center md:items-start gap-5 md:w-1/2">
          <h3 class="text-xl md:text-2xl lg:text-4xl text-center tracking-wide md:text-left">
            Building user-friendly web experiences with aesthetic pleasure. 
          </h3>
          <!-- <p class="md:text-left text-center text-gray-700 text-lg">I am a Web Developer</p> -->
          <button class="btn max-w-xs" href="#">Download CV</button>
        </div>
        <div class="flex justify-center flex-1 md:mb-0 md:w-1/2 shadow-sm p-2">
          <img class="w-full h-5/6 md:h-full" src="../assets/Hello-rafiki.png" alt="welcome image">
        </div>
      </div>
    </section>    
  </div>
  <AboutView/>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return{
      names: ['Bruce', 'Clark', 'Jones'],
    }
  }
}
</script>
