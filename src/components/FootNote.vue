<template>
  <div class="foot-note">
    <div class="foot-wrap">
      <h2>Contact Me</h2>
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
    @apply px-16 py-6 flex flex-col gap-4 justify-center items-center;
    // bg-[#131628];
    border-top: 1px solid #4238c9;

    @screen sm {
      @apply flex-row py-10 gap-10;
    }

    h2{
      @apply uppercase text-base;

      @screen lg {
        @apply text-xl
      }
    }

    .socials {
      @apply flex gap-4;

      @screen lg {
        @apply gap-10
      }

      .icon{
        @apply text-white h-5;

        @screen lg {
          @apply h-8
        }

      }
    }
  }
}
</style>