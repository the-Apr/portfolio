<template>
  <div class="project-card">
    <div class="icons">
      <div class="icon">
        <fa-icon class="github" :icon="['fab', 'github']" />
      </div>
    </div>
    <img :src= "require(`../assets/${post.blogCoverPhoto}.jpg`)" alt="setup">
    <div class="info">
      <h4>{{post.blogTitle}}</h4>
      <h6>Posted on: {{post.blogDate}}</h6>
      <a class="link" to="#">
        View The Post <fa-icon class= "arrow" :icon="['fas', 'arrow-right']" />
      </a>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'project-card',

  props: ['post']
}
</script>

<style lang="scss" scoped>
.project-card {
  @apply relative cursor-pointer flex flex-col rounded-lg w-full p-2;
  min-height: 200px;
  max-height: 370px;
  // background-color: #272729;
  background-color: #090e1b;
  
  transition: .5s ease all;

  @screen sm{
    min-height: 420px;
    max-height: 500px;
  }

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    @apply flex absolute top-4 right-3;
    z-index: 99;

    .icon {
      @apply flex justify-center items-center w-8 h-8 p-4;
      border-radius: 50%;
      transition: 0.5s ease all;
      background-color: #272729;
      // background-color: #4238c9;

      &:hover {
        color: #fff;
        background-color: #303030;
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .github{
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    @apply block w-full object-cover rounded-xl;
    z-index: 1;
    min-height: 200px;
    

    @screen md{
      min-height: 300px;
    }
  }

  .info {
    @apply flex flex-col h-full py-8 px-4;
    z-index: 3;
    color: #000;

    h4 {
      @apply pb-2 text-lg font-light
    }
    h6 {
      @apply pb-4 text-sm font-normal
    }
    .link {
      @apply inline-flex items-center mt-auto font-medium pt-4 text-sm pb-1;
      transition: .5s ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>