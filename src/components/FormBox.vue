<template>
  <div class="formbox">
    <!-- v-bind = : -->
    <b-jumbotron>
      <template slot="header">
        <h3>{{ titleForm }}</h3>
      </template>
      <hr class="my-4">
      <form-inputs></form-inputs>
    </b-jumbotron>
  </div>
</template>

<script>
import FormInputs from './FormInputs'
export default {
  name: 'FormBox',
  components: {
    FormInputs
  },
  data: function () {
    return {
      titleForm: 'Formulário com Vue.js'
    }
  }
}
</script>

<style scoped>

</style>
