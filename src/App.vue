<template>
  <v-app>
    <Main/>
    <!-- <CompositionApi title="Registration Form"></CompositionApi> -->
  </v-app>
</template>

<script setup>
import Main from './components/Main.vue'

export default {
  components: {
    Main
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
