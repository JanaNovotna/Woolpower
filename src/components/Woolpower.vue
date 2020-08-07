<template>
  <div>
    <agile>
      <div>
        <img src="src/assets/Riverside2.jpg" alt="" class="slide" />
        <h3>slide 1</h3>
      </div>
      <div>
        <img src="src/assets/Biking.jpg" alt="" class="slide" />
        <h3>slide 1</h3>
      </div>
      <div>
        <img src="src/assets/Hiking2.jpg" alt="" class="slide" />
        <h3>slide n</h3>
      </div>
    </agile>
    <div>
      <h2>Woopower produkty</h2>
    </div>
    <div class="nabidka">
      <div class="zakladni-vrstva"><h5>Ullfrotté</h5></div>

      <div class="sloupec">
        <div class="rada-lite nahledy"><h5>Lite</h5></div>
        <div class="detske-obleceni nahledy"><h5>Pro děti</h5></div>
      </div>
      <div class="sloupec">
        <div class="pracovni-obleceni nahledy"><h5>Pracovní oblečení</h5></div>
        <div class="doplnky nahledy"><h5>Doplňky</h5></div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Woolpower",
  components: {
    agile: VueAgile,
  },
};
</script>
<style scoped>
/* Carousel */
agile nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}

agile nav-button:hover {
  background-color: rgba(#000, 0.5);
  opacity: 1;
}

.slide {
  display: block;
  height: 60vh;
  object-fit: cover;
  width: 100%;
}
/* nabídka produktů */
h2 {
  text-align: center;
}

.nabidka {
  display: flex;
  flex-direction: column;
}

.zakladni-vrstva {
  display: flex;
  background-image: url("../assets/HikingSummer2.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 300px;
  padding: 10px;
  margin: 5px;
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

h5 {
  color: #fff;
  font-size: 16px;
  margin-bottom: 0;
}

.nahledy {
  display: flex;

  align-items: flex-end;
  padding-left: 10px;
}

@media (min-width: 640px) {
  h5 {
    font-size: 18px;
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
  h5 {
    font-size: 22px;
  }

  .nabidka {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .zakladni-vrstva {
    flex: 2 0 auto;
  }
  .sloupec {
    flex: 1 0 auto;
  }
}

@media (min-width: 1280px) {
}
</style>
