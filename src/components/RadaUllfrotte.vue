<template>
  <div>
    <img
      src="../assets/banners/Landscape4.jpg"
      alt="Rodina na výletě na běžkách"
      class="banner"
    />
    <div>
      <h1>Woolpower Ullfrotté</h1>
      <p class="popis__rady">
        Klasický úplet od firmy Woolpower - z vnější strany hladký, z vnitřní
        strany froté očka pro vyšší míru izolace. Základem všech výrobků je
        kruhový úplet a všechno oblečení má ploché švy.
      </p>
      <p class="popis__rady">
        <b>Složení materiálu Ullfrotté:</b><br />
        60% Merino vlny<br />
        25% Polyesteru<br />
        13% Polyamidu<br />
        2% Elastanu
      </p>
    </div>
    <div class="produkty">
      <div v-for="produkt in produkty" :key="produkt.name" class="produkt">
        <img
          :src="require(`../assets/produkty/ullfrotte/${produkt.image}`)"
          :alt="produkt.name"
        />
        <h2 class="nazev__produktu">{{ produkt.name }}</h2>
        <p class="popis__produktu">{{ produkt.description }}</p>
        <p class="dostupne__barvy">Dostupné barvy: {{ produkt.colors }}</p>
        <p class="pohlavi">{{ produkt.sex }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ullfrotte from "../ullfrotte.js";
export default {
  name: "rada_Ullfrotte",
  data() {
    return {
      produkty: ullfrotte.produkty,
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
  position: relative;
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

.pohlavi {
  clear: both;
  border: 1px solid #566b6c;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  background: #566b6c;
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
