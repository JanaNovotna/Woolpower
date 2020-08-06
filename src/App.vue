<template>
  <div id="app">
    <div>
      <navigace />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigace from "./components/Navigace.vue";

export default {
  name: "App",
  components: {
    navigace: Navigace,
  },
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: "Hind", sans-serif;
}
</style>
