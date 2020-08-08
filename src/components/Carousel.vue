<template>
  <agile class="carousel">
    <div>
      <img src="src/assets/Riverside2.jpg" alt="" class="slide" />
      <div class="popisek">
        <h3>Proč zvolit Woolpower?</h3>
        <p>
          Produkty Woolpower se stále vyrábí kompletně ve městě Östersund ve
          Švédsku. Od předení vlákna, přes tkaní až po šití konečného výrobku.
        </p>
      </div>
    </div>
    <div>
      <img src="src/assets/Biking.jpg" alt="" class="slide" />
      <div class="popisek">
        <h3>Proč si zvlotit Woolpower?</h3>
        <p>
          Oblčení i doplňky jsou vyráběny tak, aby byly pohodlné na každodenní
          nošení ale aby byly zároveň odolné a zvládli jakékoliv sportovní
          aktivity za jekéhokoliv počasí.
        </p>
      </div>
    </div>
    <div>
      <img src="src/assets/Hiking2.jpg" alt="" class="slide" />
      <div class="popisek">
        <h3>Proč si zvolit Woolpower?</h3>
        <p>
          Společenost se stará o své prostředí. Ať už se jedná o lidi, zvířata
          či přírodu.
        </p>
      </div>
    </div>
  </agile>
</template>
<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Carousel",
  components: {
    agile: VueAgile,
  },
};
</script>
<style scoped>
.slide {
  position: relative;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 80vh;
}
.popisek {
  position: absolute;
  padding: 0.5rem;
  bottom: 1rem;
  margin: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 35vw;
  font-size: 0.9rem;
}

.button.agile__nav-button {
  background-color: darkgreen;
}
</style>
