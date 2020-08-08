<template>
  <div>
    <navigace />
    <router-view />
    <paticka />
  </div>
</template>

<script>
import Navigace from "./components/Navigace.vue";
import Footer from "./components/Paticka.vue";

export default {
  name: "App",
  components: {
    navigace: Navigace,
    paticka: Footer,
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

body {
  margin: 0;
  padding: 0;
}
</style>
