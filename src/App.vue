<template>
  <div>
    <div id="navigace">
      <router-link to="/"></router-link>
      <router-link to="/rada_Lite">Řada Lite</router-link>
      <router-link to="/rada_Ullfrotte">Řada Ullfrotté</router-link>
      <router-link to="/detske_obleceni">Dětské oblečení</router-link>
      <router-link to="/doplnky">Doplňky</router-link>
      <router-link to="/pracovni_obleceni">Pracovní oblečení</router-link>
      <router-link to="/Woolpoered">Woolpoered</router-link>
      <router-link to="/o_Woolpoweru">O Woolpoweru</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>