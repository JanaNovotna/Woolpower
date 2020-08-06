<template>
  <div>
    <H1>Zkouška</H1>
    <agile>
      <div class="slide">
        <img src="../assets/Riverside2.jpg" alt="" />
        <h3>slide 1</h3>
      </div>
      <div class="slide">
        <img src="../assets/Biking.jpg" alt="" />
        <h3>slide 1</h3>
      </div>
      <div class="slide">
        <img src="../assets/Hiking1.jpg" alt="" />
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
<style></style>
