<template>
<v-container>
    <v-row justify="center">
      <v-col cols="auto" align-self="center">
        <v-img
          max-height="500"
          max-width="500"
          src="src/assets/vue.png"
        ></v-img>
      </v-col>
      <v-col cols="auto" align-self="center" class="text-h2 font-weight-bold">
        Composition API
      </v-col>
    </v-row>
    <v-row justify="center">
			<v-fade-transition>
				<component :is="componentsList[counter].name" v-bind="componentsList[counter].props"></component>
			</v-fade-transition>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import CompositionApi from './CompositionApi.vue'
import OptionsApi from './OptionsApi.vue'
import CompositionInfo from './CompositionInfo.vue'
import CompositionImages from './CompositionImages.vue'
import CompositionSummary from './CompositionSummary.vue'
export default {
  name: 'Main',
  components: {CompositionApi, OptionsApi, CompositionInfo, CompositionImages, CompositionSummary},
  setup () {

		const componentsList = [
			{name: '', props: {}},
			{name: 'CompositionInfo', props: {}},
			{name: 'CompositionImages', props: {}},
			{name: 'OptionsApi', props: {title: 'Registration Form (Options)'}},
			{name: 'CompositionApi', props: {title: 'Registration Form (Composition)'}},
      {name: 'CompositionSummary', props: {}}
		]

    const counter = ref(0)

    onMounted(function () {
      document.addEventListener('keydown', function(e) {
        if (e.key === '\\') {
          increaseCounter()
        }
      })
    })

    const increaseCounter = () => {
			if (counter.value < (componentsList.length - 1)) counter.value += 1
			else counter.value = 0
    }

    return {  counter, componentsList }
  }
}
</script>

<style scoped>
</style>
