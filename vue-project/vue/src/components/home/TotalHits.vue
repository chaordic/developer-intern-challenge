<template>
  <div class="grey-bg container">

    <h1 class="red">HITS</h1>

    <div class="box">
      {{ totalHits }}
    </div>

    <div class="grey-text">
      Cliques em links
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'totalHits'
    ]),
    created () {
      setInterval(
        () => {
          this.getTotalHits()
        }, 1500)
    }
  }
</script>
