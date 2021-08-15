<template>
  <div id="app">
    <SearchInput />
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'

export default {
  name: 'App',
  components: {
    SearchInput
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica', Arial, sans-serif;
}
</style>
