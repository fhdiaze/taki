<template>
  <h1>{{ title }}</h1>
  <Find />
</template>

<script>
import Find from './components/race/Find.vue';

export default {
  name: "App",
  components: {
    Find,
  },
  data() {
    return {
      title: 'My First Vue App'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
