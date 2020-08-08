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
  name: "Navigace",
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
}

.nav a {
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 2px 0 0 0;
  color: rgb(183, 184, 184);
  border-bottom: 0.5px solid rgb(183, 184, 184);
}

.nav a:hover {
  text-decoration: underline;
}

@media (min-width: 640px) {
  .nav {
    flex-direction: row;
    align-items: center;
  }

  .nav a {
    border-bottom: 0;
    margin: 5px;
  }

  .nabidka {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
@media (min-width: 1280px) {
}
</style>
