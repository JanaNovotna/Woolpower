<template>
  <div>
    <img src="../assets/banners/billTheSheep.jpg" alt="Beran jménem Bill" class="banner" />
    <div class="menu">
      <router-link to="/o_Woolpoweru">O Woolpoweru</router-link>
      <router-link to="/vrstvy">Vrstvení oblčení</router-link>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
export default {
  name: "Woolpowered",
};
</script>
<style>
.banner {
  width: 100%;
}
.menu {
  text-align: center;
}
</style>