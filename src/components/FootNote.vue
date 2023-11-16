<template>
  <div class="foot-note">
    <div class="foot-wrap">
      <h2>Contact</h2>
      <div class="socials">
        <a href="https://github.com/the-Apr" target="_blank">
          <fa-icon :icon="['fab', 'github']" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/praise-adebayo-6ab205235/" target="_blank">
          <fa-icon :icon="['fab', 'linkedin']" class="icon" />
        </a>
        <a href="mailto:praiseadebayo218@yahoo.com">
          <fa-icon :icon="['fas', 'envelope']" class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.foot-note {
  @apply mt-20;

  .foot-wrap {
    @apply px-16 py-10 flex gap-10 justify-center items-center bg-[#090e1b];
    // bg-[#131628];

    h2{
      @apply uppercase 
    }

    .socials {
      @apply flex gap-10;

      .icon{
        @apply text-white h-8

      }
    }
  }
}
</style>