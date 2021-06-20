<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto" align-self="center">
        <v-img
          max-height="600"
          max-width="1000"
          src="src/assets/vite.png"
          @click="showContent"
        ></v-img>
      </v-col>
    </v-row>
    <v-fade-transition>
      <v-row v-if="contentVisibale">
        <v-col class="text-left">
          <p class="text-h3">- Using ES modules (dev and prod)</p>
          <p class="text-h3">- Koa dev server</p>
          <p class="text-h3">- HMR with sockets (replacing each part)</p>
          <p class="text-h3">- Production build - Rollup (ES Modules)</p>
          <p class="text-h3">- Supports only new browsers (no Internet Exploder)</p>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  setup () {
    const contentVisibale = ref(false)

    const showContent = () => {
      contentVisibale.value = true
    }

    return { contentVisibale, showContent }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
