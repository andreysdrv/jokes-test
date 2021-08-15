<template>
  <div class="wrapper">
    <input
      class="search-input"
      placeholder="Введите слово для поиска анекдотов ..."
      v-model="search"
    >
      <JokesList :handleSearchInput='handleSearchInput' />
  </div>
</template>

<script>
import { getJokes } from '../../utils/data'
import JokesList from '../JokesList/JokesList.vue'

export default {
  name: 'Main',
  components: {JokesList},
  data: () => ({
    search: '',
    jokes: []
  }),
  created () {
    getJokes().then((data) => {
      this.jokes = data.jokes
    })
  },
  computed: {
    handleSearchInput () {
      return this.jokes.filter(el => {
        return el.joke.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
@import url(./Main.css);
</style>
