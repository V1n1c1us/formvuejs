<template>
  <div class="container">
    <div id="app">
      <form-box></form-box>
    </div>
  </div>
</template>

<script>
import FormBox from './components/FormBox'
export default {
  name: 'App',
  components: {
    FormBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
