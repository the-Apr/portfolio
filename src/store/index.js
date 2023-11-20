import { createStore } from 'vuex';

export default createStore ({
  state: {
    mobileNav: null,
  },

  mutations: {
    toggleNav(state) {
      state.mobileNav = !state.mobileNav;
    },
  },

  actions: {
    // scrollToSection(context, sectionId) {
    //   context.root.scrollToSection(sectionId);
    // },
    
    // mobileScrollToSection(context, sectionId) {
    //  context.root.scrollToSection(sectionId);
    //  context.commit('toggleNav');
    // },

    scrollToSection( payload) {
      const sectionId = payload;
      const element = this.$refs[sectionId];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    mobileScrollToSection(context, payload) {
      context.dispatch('scrollToSection', payload);
      context.commit('toggleNav');
      console.log('e reach here');
      console.log(payload)
    },
  }
})