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
export default {
  props: {
    title: String
  },
  data() {
    return {
      fullname: '',
      email: '',
      country: '',
      valid: true,
      error: false
    };
  },
  methods: {
    emptyFieldRule (val) {
      return !!val || "Required field";
    },
    fullnameRule (val) {
      return val.split(" ").length >= 2 || "A full name can't be only 1 word (Unless you are Madona or some other creature...)"
    },
    emailRule (val) {
      const regex = /[\w\W]+\@gmail\.com/gm;
      return regex.test(val) || "We currently support only gmail (Hard times...)"
    },
    printForm () {
      if (this.$refs.form.validate() && this.validateCountry()) {
        console.log({
          fullname: this.fullname,
          email: this.email,
          country: this.country
        })
      }
    },
    validateCountry () {
      if (this.country === 'India') {
        this.error = 'Wrong country - Do a relocation and change your name'
      } else {
        this.error = ''
        return true
      }
    }
  },
  computed: {
    countries () {
      return ["United States", "Canada", "Israel", "Germany", "India", "China"]
    }
  },
};
</script>

<style>
</style>