<template>
  <div>
    <v-img
			v-if="num === 1"
      :src="'src/assets/comapre-2.png'"
    ></v-img>
		<!-- <v-img
			v-if="num === 2"
			@click="replaceImage"
      :src="'src/assets/comapre-1.png'"
    ></v-img> -->
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
	setup () {
		const num = ref(1)

		const replaceImage = () => {
			if (num.value === 1) {
				num.value = 2
			} else {
				num.value = 1
			}
		}

		return {num, replaceImage}
	}
}
</script>

<style>

</style>