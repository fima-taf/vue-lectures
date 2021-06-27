<template>
<v-container>
    <v-row justify="center">
      <v-col cols="auto" align-self="center" @click="increaseCounter()">
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
import { ref } from '@vue/composition-api'
import CompositionApi from './CompositionApi.vue'
import OptionsApi from './OptionsApi.vue'
import CompositionInfo from './CompositionInfo.vue'
import CompositionImages from './CompositionImages.vue'
export default {
  name: 'Main',
  components: {CompositionApi, OptionsApi, CompositionInfo, CompositionImages},
  setup () {
    const contentVisibale = ref(false)

    const showContent = () => {
      contentVisibale.value = true
    }

		const componentsList = [
			{name: '', props: {}},
			{name: 'CompositionImages', props: {}},
			{name: 'CompositionInfo', props: {}},
			{name: 'OptionsApi', props: {title: 'Registration Form (Options)'}},
			{name: 'CompositionApi', props: {title: 'Registration Form (Composition)'}}
		]

    const counter = ref(0)

    const increaseCounter = () => {
			if (counter.value < (componentsList.length - 1)) counter.value += 1
			else counter.value = 0
    }

    return { contentVisibale, showContent, increaseCounter, counter, componentsList }
  }
}
</script>

<style scoped>
</style>
