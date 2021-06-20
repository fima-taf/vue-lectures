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
    <v-row>
      <v-col cols="12">
        <v-sheet color="white" elevation="2" rounded>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="title"
                  :rules="rules"
                  counter="25"
                  hint="This field uses counter prop"
                  label="Regular"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
	setup () {

	}
};
</script>

<style>
</style>