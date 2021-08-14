<template>
  <div>
    <input
      class="search-input"
      placeholder="Введите слово для поиска анекдотов ..."
      v-model="search"
    >
    <ul class="jokes-list">
      <li class="jokes-list__item" v-for="item in handleSearchInput" :key="item.id">
        <span>{{ item.id }}</span>
        <p class="jokes-list__item-text">{{ item.joke }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getJokes } from '../data/data'

export default {
  name: 'search-input',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-input {
    width: 500px;
    height: 30px;
    border: 2px solid #000;
    padding: 0 0 0 10px;
    margin: 0;
  }

  .jokes-list {
    margin: 0;
    padding: 0;
  }
</style>
