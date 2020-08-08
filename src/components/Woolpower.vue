<template>
  <div>
    <carousel />
    <div>
      <h2>Woolpower produkty</h2>
    </div>
    <div class="nabidka">
      <div class="zakladni-vrstva"><h5>Ullfrotté</h5></div>

      <div class="sloupec">
        <div class="rada-lite nahledy"><h5>Lite</h5></div>
        <div class="detske-obleceni nahledy"><h5>Pro děti</h5></div>
      </div>
      <div class="sloupec">
        <div class="pracovni-obleceni nahledy"><h5>Na práci</h5></div>
        <div class="doplnky nahledy"><h5>Doplňky</h5></div>
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
