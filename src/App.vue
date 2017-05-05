<template>
  <div id="app">
    <div class="navbar">
      <md-toolbar class="md-dense">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">Syed Aman</h2>

        <!-- Display profile picture -->
        <md-avatar class="md-small">
          <img src="https://placeimg.com/64/64/people/8" alt="People">
        </md-avatar>
      </md-toolbar>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  // import Vue Material styles
  import 'vue-material/dist/vue-material.css'

  export default {
    name: 'app'
  }
</script>

<!-- define global styles -->
<style>
  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
