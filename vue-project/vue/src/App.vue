<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "assets/css/Roboto";
  @import "assets/css/RobotoSlab";
  @import "assets/css/colors";
  @import "assets/css/mixings";
  @import "assets/css/classes";

  body {
    text-align: center;
    font-family: 'Roboto';
    margin: 0px;
    padding: 0px;
    align-content: center;
  }

  hr {
    @include linear_gradient(left, to right, $grey2, $grey1, $grey2);
    border: none;
    height: 1px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: auto;
    font-family: 'Roboto Slab';
  }
</style>
