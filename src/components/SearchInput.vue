<template>
  <div class="wrapper">
    <input
      class="search-input"
      placeholder="Введите слово для поиска анекдотов ..."
      v-model="search"
    >
    <ul class="jokes-list">
      <li
        class="jokes-list__item"
        v-for="item in handleSearchInput"
        :key="item.id"
      >
        <span
          class="jokes-list__item-num">
            {{ handleSearchInput.indexOf(item) + 1 }}
        </span>
        <p
          class="jokes-list__item-text">
            {{ item.joke }}
        </p>
        <input
          type="checkbox"
          name="item"
          :id="item.id"
          :value="item.joke"
          class="jokes-list__item-like"
          v-model="checked"
          v-on:click="handleLike"
        >
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
    jokes: [],
    checked: []
  }),

  watch: {
    checked (newValue, oldValue) {
      localStorage.setItem('checked', JSON.stringify(newValue))
    }
  },

  mounted () {
    this.checked = JSON.parse(localStorage.getItem('checked')) || []
  },

  methods: {
    handleLike () {
      const joke = document.querySelector('.jokes-list__item')
      console.log(joke)
    }
  },

  created () {
    getJokes().then((data) => {
      this.jokes = data.jokes
      // this.likes = data.likes
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
  .wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
  }

  .search-input {
    max-width: 500px;
    width: 100%;
    height: 30px;
    border: 2px solid #000;
    padding: 0 0 0 10px;
    margin: 0;
  }

  .jokes-list {
    margin: 50px 0 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .jokes-list__item {
    padding: 10px;
    background-color: #eee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    min-height: 100px;
    position: relative;
  }

  .jokes-list__item-num {
    align-self: baseline;
  }

  .jokes-list__item-text {
    margin: 0 0 0 10px;
  }

  .jokes-list__item-like {
    padding: 0;
    width: 22px;
    height: 19px;
    background-image: url(../assets/like-button.svg);
    border: none;
    background-color: transparent;
    transition: .2s;
    outline: none;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .jokes-list__item-like:hover {
    cursor: pointer;
    opacity: .5;
  }

</style>
