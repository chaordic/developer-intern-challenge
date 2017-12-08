<template>
  <div class="container top-5">

    <h1 class="red">TOP 5</h1>

    <ul>
      <li v-for="url in topHits">

        <div class="side-by-side url">
          <a :href="url.shortUrl">{{ url.shortUrl }}</a>
        </div>

        <div class="side-by-side hits grey-text">
          {{ url.hits }}
        </div>

        <hr>
      </li>
    </ul>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'topHits'
    ]),
    created () {
      this.getTopHits()
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/colors";

  li {
    list-style-type: none;
  }

  a {
    color: $red;
    text-decoration: none;
  }
</style>

