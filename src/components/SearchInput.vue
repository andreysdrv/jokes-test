<template>
  <input
    class="search-input"
    placeholder="Введите слово для поиска анекдотов ..."
  >
</template>

<script>
export default {
  name: 'search-input'
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

</style>
