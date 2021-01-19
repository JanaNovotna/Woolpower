<template>
  <div class="formular">
    <h1>Prodejci</h1>
    <div class="prodejci">
      <div class="prodejce">
        <h2>Parys</h2>
        <p>
          Průmyslová 1292<br />50601 Jičín <br />
          <b>telefon:</b> 774 411 193 <br />
          <b>e-mail:</b><a href="mailto:info@parys.cz">info@parys.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <h2>Fish & Hunt</h2>
        <p>
          Kolínská 94<br />280 02 Nová Ves I <br />
          <b>telefon:</b> 774 377 133 <br />
          <b>e-mail:</b><a href="mailto:shop@fishhunt.cz">shop@fishhunt.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <h2>Bushcraft</h2>
        <p>
          Jesenická 22<br />787 01 Šumperk<br />
          <b>telefon:</b> 605 011 644
        </p>
        <p>
          Na Václavce 28;<br />150 00 Praha 5<br />
          <b>telefon:</b> 737 730 056 <b>e-mail:</b
          ><a href="mailto:info@bushcraftshop.cz">info@bushcraftshop.cz</a>
        </p>
      </div>
    </div>
    <h1>Kontakt</h1>
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
        Můžete nám napsat na email:
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

.prodejci {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.prodejce {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5rem;
  border: 1px solid rgb(165, 164, 164);
  border-radius: 5px;
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
.formular a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: underline;
}
.formular a:visited {
  color: rgb(165, 164, 164);
}
@media (min-width: 640px) {
  .prodejci {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  .prodejce {
    width: 300px;
    margin: 1rem;
  }
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
