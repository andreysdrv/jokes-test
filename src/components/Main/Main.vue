<template>
  <div class="wrapper">
    <input
      class="search-input"
      placeholder="Введите слово для поиска анекдотов ..."
      v-model="search"
    >
      <JokesList
        v-if="handleSearchInput.length !== 0"
        :handleSearchInput='handleSearchInput'
        />
      <h1
        v-else
      >
        По Вашему запросу анекдотов не нашлось :(
      </h1>
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
        const newArr = el.joke.toLowerCase().includes(this.search.toLowerCase())
        console.log(newArr)
        return newArr
      })
    }
  }
}
</script>

<style scoped>
@import url(./Main.css);
</style>
