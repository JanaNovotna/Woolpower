<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/Woolpower-logo.png" alt="logo"
      /></router-link>
    </div>
    <div class="nabidka">
      <router-link to="/rada_Lite">Řada Lite</router-link>
      <router-link to="/rada_Ullfrotte">Řada Ullfrotté</router-link>
      <router-link to="/detske_obleceni">Dětské oblečení</router-link>
      <router-link to="/doplnky">Doplňky</router-link>
      <router-link to="/pracovni_obleceni">Pracovní oblečení</router-link>
      <router-link to="/Woolpowered">Woolpowered</router-link>
      <router-link to="/o_Woolpoweru">O Woolpoweru</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .nav {
    flex-direction: row;
  }
}
@media (min-width: 1280px) {
}
</style>
