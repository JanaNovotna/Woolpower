<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/rada_Lite">Řada Lite</router-link>
    <router-link to="/rada_Ullfrotte">Řada Ullfrotté</router-link>
    <router-link to="/detske_obleceni">Dětské oblečení</router-link>
    <router-link to="/doplnky">Doplňky</router-link>
    <router-link to="/pracovni_obleceni">Pracovní oblečení</router-link>
    <router-link to="/Woolpowered">Woolpowered</router-link>
    <router-link to="/o_Woolpoweru">O Woolpoweru</router-link>
    <router-link to="/kontakt">Kontakt</router-link>

    <router-view />
    <div>
      <Woolpower />
    </div>
  </div>
</template>

<script>
import Woolpower from "./components/Woolpower.vue";

export default {
  name: "App",
  components: {
    Woolpower: Woolpower,
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
