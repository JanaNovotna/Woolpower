<template>
  <agile>
    <div>
      <img src="../assets/Riverside2.jpg" alt class="slide" />
      <div class="popisek">
        <h3>Proč Woolpower?</h3>
        <p>
          Produkty Woolpower se stále vyrábí ve městě Östersund ve
          Švédsku. Od předení vlákna, přes tkaní až po šití konečného výrobku a jeho následnou expedici.
        </p>
      </div>
    </div>
    <div>
      <img src="../assets/Biking.jpg" alt class="slide" />
      <div class="popisek">
        <h3>Proč Woolpower?</h3>
        <p>
          Oblčení i doplňky jsou vyráběny tak, aby byly pohodlné při každodenním
          nošení, ale aby byly zároveň odolné a zvládli jakékoliv sportovní
          aktivity za jekéhokoliv počasí.
        </p>
      </div>
    </div>
    <div>
      <img src="../assets/Hiking2.jpg" alt class="slide" />
      <div class="popisek">
        <h3>Proč Woolpower?</h3>
        <p>
          Společenost se stará o prostředí, ve kterém působí. Ať už se jedná o lidi, zvířata
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
.agile__list {
  position: relative;
}
.agile__nav-button {
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

.agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}
.slide {
  display: block;
  height: 80vh;
  object-fit: cover;
  width: 100%;
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
</style>
