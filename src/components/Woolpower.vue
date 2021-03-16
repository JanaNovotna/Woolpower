<template>
  <div>
    <div class="uvod">
      <img
        src="../assets/Nove-barvy-trek.jpg"
        alt="Na treku ve Švédsku."
        class="uvodni__foto"
      />
      <div class="popisek__nahled">
        <h3>Proč Woolpower?</h3>
        <p>
          Produkty Woolpower se stále vyrábí ve městě Östersund ve Švédsku. Od
          předení vlákna, přes tkaní až po šití konečného výrobku a jeho
          následnou expedici. Oblečení i doplňky jsou vyráběny tak, aby byly
          pohodlné při každodenním nošení, ale aby byly zároveň odolné a zvládli
          jakékoliv sportovní aktivity za jekéhokoliv počasí. Společenost
          Woolpower se navíc stará o prostředí, ve kterém působí. Ať už se jedná
          o lidi, zvířata či přírodu.
        </p>
      </div>
    </div>
    <div>
      <h2>Woolpower produkty</h2>
    </div>
    <div class="nabidka">
      <div class="zakladni-vrstva">
        <router-link to="/rada_Ullfrotte">
          <!-- <img src="../assets/HikingSummer2.jpg" alt class="pozadi" /> -->
          <h5>Ullfrotté</h5>
        </router-link>
      </div>
      <div class="sloupec">
        <div class="rada-lite nahledy">
          <router-link to="/rada_Lite">
            <h5>Lite</h5>
          </router-link>
        </div>
        <div class="detske-obleceni nahledy">
          <router-link to="/detske_obleceni">
            <h5>Pro děti</h5>
          </router-link>
        </div>
      </div>
      <div class="sloupec">
        <div class="pracovni-obleceni nahledy">
          <router-link to="/pracovni_obleceni">
            <h5>Na práci</h5>
          </router-link>
        </div>
        <div class="doplnky nahledy">
          <router-link to="/doplnky">
            <h5>Doplňky</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "./Carousel.vue";

export default {
  name: "Woolpower",
  components: {
    carousel: Carousel,
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}

h2::before {
  content: "- - - ";
  font-weight: 200;
}

h2::after {
  content: " - - -";
  font-weight: 200;
}

h5 {
  color: #fff;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 90px;
}
.uvodni__foto {
  width: 100%;
  margin: 0;
}
.popisek__nahled {
  padding: 0.5rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.9rem;
}

.nabidka {
  display: flex;
  flex-direction: column;
}

.zakladni-vrstva {
  display: flex;
  background-image: url("../assets/HikingSummer2.jpg");
  background-position: center top;
  background-size: cover;
  min-height: 300px;
  padding: 0 10px;
  margin: 5px;
}

.zakladni-vrstva h5 {
  margin-top: 260px;
}

.sloupec {
  display: flex;
  flex-direction: column;
}

.rada-lite {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/RunningInOstersund2.jpg");
  background-position: center top;
  background-size: cover;
  min-height: 200px;
  margin: 5px;
}

.detske-obleceni {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/AutumnKids.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 200px;
  margin: 5px;
}

.pracovni-obleceni {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/Work.jpg");
  background-position: center top;
  background-size: cover;
  min-height: 200px;
  margin: 5px;
}

.doplnky {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/Socks.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 200px;
  margin: 5px;
}

.nahledy {
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-left: 10px;
}

.nabidka a {
  height: 100%;
  width: 100%;
  text-decoration: none;
}

/* .pozadi img {
  max-width: 100%;
} */

@media (min-width: 640px) {
  h2::before {
    content: "- - - - - - - ";
  }

  h2::after {
    content: " - - - - - - -";
  }

  h5 {
    font-size: 18px;
    margin-top: 170px;
  }
  .uvod {
    position: relative;
  }
  .popisek__nahled {
    position: absolute;
    bottom: 0.5rem;
    padding: 0.25rem 1rem;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 0.9rem;
  }

  .nabidka {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .zakladni-vrstva {
    flex: 1 0 100%;
  }
  .sloupec {
    flex: 1 0 50%;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 40px;
  }

  h2::before {
    content: "- - - - - - - - - - - - ";
  }

  h2::after {
    content: " - - - - - - - - - - -";
  }

  h5 {
    font-size: 22px;
  }

  .popisek__nahled {
    padding: 0.5rem;
    margin: 2rem;
    width: 35vw;
  }

  .nabidka {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .zakladni-vrstva h5 {
    margin-top: 390px;
  }
  .zakladni-vrstva {
    background-position: center center;
    flex: 2 0 auto;
  }
  .sloupec {
    flex: 1 0 auto;
  }
}

@media (min-width: 1280px) {
}
</style>
