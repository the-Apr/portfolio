<template>
  <div class="bg-gradient-to-r from-indigo-200 to-pink-200 via-purple-200 font-Poppins">
    <nav class="md:container px-8  font-bold flex flex-1 items-center py-4">
      <div class="logo">
        <h2>My Portflio</h2>
      </div>
      <ul id="menu " class="hidden md:flex flex-1 md:items-center justify-end uppercase space-x-7 text-sm" >
        <router-link to="/" id="nav-item" class="nav-item active">Home</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
        <router-link to="/" class="nav-item"> Profile</router-link>
        <router-link to="/" class="nav-item"> Projects</router-link>
        <button class="btn" href="#">Hire</button>
      </ul>
      <div id="hamburger" class="flex md:hidden flex-1 justify-end cursor-pointer">
        <i class="text-2xl fa fa-bars" aria-hidden="true"></i>
      </div>
    </nav>
    <router-view/>
  </div>
  
</template>

<style>

</style>

<script>
  export default{
    components:{},
    data(){
      return{
        
      }
    }
  }
</script>
