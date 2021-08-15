<template>
  <ul class="jokes-list">
    <li
      class="jokes-list__item"
      v-for="(item, index) in handleSearchInput"
      :key="item.id"
    >
      <span
        class="jokes-list__item-num">
          {{ index + 1 }}
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
      >
      <label :for="item.id" class="custom-like-btn"></label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'JokesList',
  data () {
    return {
      checked: []
    }
  },
  props: {
    handleSearchInput: {
      type: Array
    }
  },
  mounted () {
    this.checked = JSON.parse(localStorage.getItem('checked')) || []
  },
  methods: {
    handleLike () {
      this.like = !this.like
    }
  },
  watch: {
    checked (newValue, oldValue) {
      localStorage.setItem('checked', JSON.stringify(newValue))
    }
  }
}
</script>

<style scoped>
@import url(./JokesList.css);
</style>
