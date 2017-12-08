const API_ROOT = 'http://chr.dc/api'
const URLS = API_ROOT + '/urls'
const HITS = API_ROOT + '/hits'

export const api = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        postUrl (url) {
          const data = {url: url}
          this.$http.post(URLS, data).then(
            (response) => {
              this.$store.state.url.url = response.body.shortUrl
              this.$store.state.url.shortened = true
            }
          )
        },
        getTopHits () {
          this.$http.get(URLS).then(
            (response) => {
              this.$store.state.topHits = response.body
            }
          ).catch(
            (error) => {
              console.log(error)
            }
          )
        },
        getTotalHits () {
          this.$http.get(HITS).then(
            (response) => {
              var hits = response.body.hits
              if (hits !== this.$store.state.totalHits) {
                this.getTopHits()
              }
              this.$store.state.totalHits = hits
            }
          ).catch(
            (error) => {
              console.log(error)
            }
          )
        }
      }
    })
  }
}
