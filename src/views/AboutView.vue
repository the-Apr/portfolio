<template>
  <div class="about">
    <section class="bg-gradient-to-r from-indigo-100 to-pink-100 via-purple-100">
      <div class=" md:container px-8 items-center space-y-7 pt-10">
        <h2 class="text-purple-800 font-semibold text-xl text-left md:text-3xl tracking-wider">About</h2>
        <div class="flex flex-col md:flex-row justify-center mx-auto items-center gap-12 mt-10 md:mt-16">
          <div class="flex justify-center flex-1 md:mb-0 md:w-1/2 p-2 shadow-md">
            <img class="w-full h-5/6" src="../assets/young_man.jpg" alt="profile pic">
          </div>
          <div class="text-center md:w-1/2 space-y-2">
            <p class="text-base md:text-xl tracking-wide"> I am a zealous web developer. Lover of aesthetics who develops beautiful user-friendly websites.</p>
            <p class="text-base md:text-xl tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae eius eos delectus porro ducimus sint exercitationem doloribus dolorem corporis aspernatur ea at veniam cupiditate ullam, quaerat officiis cum. Corruptian.</p>
            
          </div>
        </div>
        <hr class="border-1 border-purple-500 ">
      </div>

      <div class="py-7 space-y-7 md:container px-8">
        <h2 class="text-purple-800 font-semibold text-xl md:text-3xl tracking-wider">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-dense gap-5">
          <img src="../assets/work1.jpg" alt="" class="max-h-min">
          <img src="../assets/work2.jpg" alt="" class="object-cover">
          <img src="../assets/work3.jpg" alt="">
          <img src="../assets/work1.jpg" alt="">
          <img src="../assets/work2.jpg" alt="">
          <img src="../assets/work3.jpg" alt="">
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    name: 'AboutView',
    components: {
       
    }
  }
</script>
