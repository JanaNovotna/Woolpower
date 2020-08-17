<template>
  <div>
    <img src="../assets/banners/doplnky.jpg" alt="Návleky na ruce a šálek kávy" class="banner" />
    <div>
      <h1>Doplňky</h1>
      <p
        class="popis__rady"
      >Ponožky a ostatní doplňky vyráběné jak z materiálu Lite tak z klasického úpletu Ullfrotté v různých gramážích, tak aby byla pokrytá celá škála aktivit a počasí.</p>
    </div>
    <div class="produkty">
      <div v-for="produkt in produkty" :key="produkt.name" class="produkt">
        <img :src="require(`../assets/produkty/doplnky/${produkt.image}`)" :alt="produkt.name" />
        <h2 class="nazev__produktu">{{produkt.name}}</h2>
        <p class="popis__produktu">{{produkt.description}}</p>
        <p class="dostupne__barvy">Dostupné barvy: {{produkt.colors}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import doplnky from "../doplnky.js";
export default {
  name: "doplnky",
  data() {
    return {
      produkty: doplnky.produkty,
    };
  },
  computed: {},
};
</script>
<style scoped>
h1 {
  text-align: center;
}
p {
  padding: 1rem;
}
.banner {
  width: 100%;
}
.popis__rady {
  text-align: center;
}
.produkty {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.produkt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5rem;
  border-bottom: 1px dashed darkgray;
}
.produkt img {
  width: 100%;
  margin: 0 auto;
}
.nazev__produktu {
  text-align: center;
  font-size: 1rem;
}
.popis__produktu {
  text-align: center;
  font-size: 0.9rem;
}
.dostupne__barvy {
  text-align: center;
  font-size: 0.8rem;
}
@media (min-width: 640px) {
  .produkty {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  .produkt {
    width: 300px;
    margin: 1rem;
  }
  .nazev__produktu {
    font-size: 1.2rem;
  }
  .popis__produktu {
    font-size: 1rem;
    margin: 0;
  }
  .dostupne__barvy {
    font-size: 0.9rem;
  }
}
@media (min-width: 1280px) {
  /* .produkt {
    width: 400px;
  } */
}
</style>