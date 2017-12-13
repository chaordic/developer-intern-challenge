<template>
  <div>
    <app-shortener></app-shortener>

    <app-top-hits></app-top-hits>

    <app-total-hits></app-total-hits>
  </div>
</template>

<script>
  import Shortener from './Shortener.vue'
  import TopHits from './TopHits.vue'
  import TotalHits from './TotalHits.vue'

  export default {
    components: {
      appShortener: Shortener,
      appTopHits: TopHits,
      appTotalHits: TotalHits
    }
  }
</script>
