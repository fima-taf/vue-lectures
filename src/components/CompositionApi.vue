<template>
      <v-col cols="4">
        <v-sheet color="white" elevation="2" rounded>
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="text-h4 text-center">{{title}}</div>
              </v-col>
              <v-col cols="12">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="fullname"
                    :rules="[emptyFieldRule, fullnameRule]"
                    validate-on-blur
                    label="Full Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="[emptyFieldRule, emailRule]"
                    validate-on-blur
                    type="email"
                    label="Email"
                  ></v-text-field>
                  <v-select
                    v-model="country"
                    :items="countries"
                    label="Country"
                    validate-on-blur
                    :rules="[emptyFieldRule]"
                  ></v-select>
                </v-form>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="auto">
                    <v-btn color="green lighten-1" @click="printForm">
                      Register
                    </v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <div v-if="error" class="red--text">{{error}}</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
</template>

<script>
import { ref, computed, toRef, toRefs, reactive } from "@vue/composition-api";

export default {
  props: {
    title: String
  },
  setup() {

    const emptyFieldRule = (val) => {
      return !!val || "Required field";
    }

    const fullname = ref('');

    const fullnameRule = (val) => {
      return val.split(" ").length >= 2 || "A full name can't be only 1 word (Unless you are Madona or some other creature...)"
    }

    const email = ref('');

    const emailRule = (val) => {
      const regex = /[\w\W]+\@gmail\.com/gm;
      return regex.test(val) || "We currently support only gmail (For the sake of the example of course)"
    }

    const country = ref('');

    const countries = computed(() => ["United States", "Canada", "Israel", "Germany", "India", "China"])

    const form = ref(null);
    const error = ref('')
    const valid = ref(true);

    const validateCountry = () => {
      if (country.value === 'India') {
        error.value = 'Wrong country - Do a relocation and change your name'
      } else {
        error.value = ''
        return true
      }
    }

    const printForm = () => {
      if (form.value.validate() && validateCountry()) {
        console.log({
          fullname: fullname.value,
          email: email.value,
          country: country.value,
        })
      }
    }

    return { fullname, emptyFieldRule, fullnameRule, email, emailRule, country, countries, printForm, form, valid, error }
  }
};

</script>

<style>
</style>