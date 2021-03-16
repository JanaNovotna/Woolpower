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
        Řada oblečení Ullfrotté byla první řadou produktů, které Woolpower
        vyráběl. Na začátku sedmdesátých let 20. století Woolpower začal vyvíjet
        oblečení do extrémních podmínek pro švédskou armádu. Na vývoji nového
        materiáu se, kromě lidí z Woolpoweru, podíleli i lékaři a externí vědci.
        Cílem bylo vytvořit takový matriál, který by byl mechanicky odolný a
        zároveň pohodlný při nošení za extrémních podmínek při různých
        aktivitách. Zkrátka tak, aby se člověk moc nepotil, ale aby mu zároveň
        nebyla zima, když se zastaví třeba na odpočinek.
      </p>
      <p class="popis__rady">
        Vznikl tak materiál Ullfrotté Original složený z jemné Merino vlny,
        polyesteru, polyamidu, elastanu a, jak říkají ve Woolpoweru, vzduchu.
        Ano, čtete správně, vzduchu. Vzduch je totiž to, co skutečně izolouje.
        Ullfortté, jak už název napovídá, je z vnitřní strany froté úplet a z
        vnější strany hladký úplet. Právě ta malá očka na vnitřní straně drží
        ohřátý vzduch u těla. A tím, že dochází k minimálnímu kontaktu látky s
        tělem, oblčení vyrobené z Ullfrotté materiálu tolik nestudí i když se
        člověk zpotí.
      </p>
      <p class="text">
        <b>Video o Ulfrotté original z produkce Woolpower:</b><br />
        <i>(video je pouze v angličtině)</i>
      </p>
      <div class="video">
        <div class="responsive_video">
          <iframe
            src="https://www.youtube.com/embed/jqYB-5T4ujM"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>

      <p class="text">
        <b>Složení materiálu Ullfrotté:</b><br />
        60% Merino vlny<br />
        25% Polyesteru<br />
        13% Polyamidu<br />
        2% Elastanu
      </p>
    </div>
    <h2>Produkty:</h2>
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
h1,
h2 {
  text-align: center;
}
p {
  padding: 1rem;
}
.banner {
  width: 100%;
}

.popis__rady {
  text-align: left;
  padding: 0 60px;
}

.text {
  text-align: center;
}

.video {
  width: 80%;
  margin: 0 auto;
}

.responsive_video {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.responsive_video iframe {
  border: 0;
  padding: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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
  .video {
    width: 60%;
  }
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
  .video {
    width: 40%;
  }
}
</style>
