<template>
  <div class="formular">
    <h2>Kontakt</h2>
    <img
      src="../assets/CampfireSummer.jpg"
      alt="Posezení u ohně"
      class="pozadi"
    />
    <div class="text">
      <h3>WOOLPOWER</h3>
      <p>
        Zastoupení pro Českou republiku a Slovensko:<br />Hanibal Sport s.r.o.
        <br />Korunní 16, Praha 2, 120 00
      </p>

      <p class="email">
        Můžete nám napsat na emial:
        <a href="mailto:obchod@woolpower.cz?subject=Zpráve z webu Woolpower.cz"
          >obchod@woolpower.cz</a
        >
      </p>
      <p>
        Oficiální stránky:
        <a href="https://woolpower.se/en/" target="blank"
          >www.woolpower.se/en</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "kontakt",
};
</script>
<style scoped>
h2 {
  text-align: center;
}
.formular {
  position: relative;
}
.pozadi {
  display: block;
  margin: 0 auto;
  width: 90vw;
  margin-bottom: 0.5rem;
}
.text {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
  max-width: 90vw;
}
.email {
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: underline;
}
a:visited {
  color: rgb(165, 164, 164);
}
@media (min-width: 640px) {
}
@media (min-width: 1024px) {
  .pozadi {
    width: 80vw;
    margin-bottom: 2rem;
  }
  .text {
    position: absolute;
    padding: 1rem;
    margin: 0 auto;
    top: 25vh;
    left: 20vw;
    min-width: 60vw;
  }
}
</style>
