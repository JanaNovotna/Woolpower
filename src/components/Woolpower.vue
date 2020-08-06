<template>
  <div>
    <H1>Zkouška</H1>
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
        <img src="src/assets/Hiking1.jpg" alt="" class="slide" />
        <h3>slide n</h3>
      </div>
    </agile>
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
  height: 500px;
  object-fit: cover;
  width: 100%;
}
</style>
