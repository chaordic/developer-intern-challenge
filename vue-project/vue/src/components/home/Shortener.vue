<template>
  <div class="shortener background-img">
    <div class="center-content">

      <h1 class="text-white">Encurte seus links.</h1>
      <p class="text-white">Links são longos. Encurte os links que você deseja compartilhar,</p>
      <p class="text-white">e acompanhe enquanto viajam através da internet.</p>

      <form @submit="submit">
        <input
          type="text"
          placeholder="Cole o seu link aqui"
          :value="url"
          ref="urlInputField"
          @input="onInput"
        >

        <button
          type="button"
          class="text-white ml-3"
          id="submitButton"
          @click="submit">
          <span v-if="shortened">{{ COPY }}</span>
          <span v-else>{{ SHORTEN }}</span>
        </button>
      </form>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Shortener',
    data () {
      return {
        COPY: 'COPIAR',
        SHORTEN: 'ENCURTAR'
      }
    },
    computed: {
      ...mapGetters([
        'url',
        'shortened'
      ])
    },
    methods: {
      onInput (event) {
        if (this.shortened) {
          event.target.value = event.data
          this.$store.state.url.shortened = false
        }
        this.$store.state.url.url = event.target.value
      },
      submit () {
        if (this.url == null) {
          return
        }
        if (this.shortened) {
          this.$refs.urlInputField.select()
          document.execCommand('copy')
        } else {
          this.postUrl(this.url)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/colors";
  @import "../../assets/css/mixings";

  .center-content {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .shortener {
    height: auto;
    min-height: 450px;
    display: block;
    position: relative;
    color: white;
  }

  .background-img {
    background-image: url('../../assets/images/background-home.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  button {
    background: $orange1;
    @include linear_gradient(top, to bottom, $orange2, $orange1, $orange2);
    height: 30px;
    font-weight: bold;
    border: none;
    color: white;
  }

  button:hover {
    background: $orange3;
    @include linear_gradient(top, to bottom, $orange3, $orange2, $orange3);
  }

  input[type='text'] {
    border: none;
    color: $orange1;
    border-bottom: 3px solid $orange1;
    width: 350px;
    height: 30px;
    background-color: transparent;
  }

  @media only screen and (max-width: 500px) {
    input[type='text'] {
      width: 200px;
    }
  }

  @media only screen and (max-width: 250px) {
    input[type='text'] {
      width: 150px;
    }
  }

</style>
