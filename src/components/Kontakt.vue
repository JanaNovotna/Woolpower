<template>
  <div class="formular">
    <h1>Prodejci</h1>
    <div class="prodejci">
      <div class="prodejce">
        <a href="https://www.parys.cz" target="_blank"
          ><img src="../assets/loga/parys.jpg" alt="Logo prodejce Parys"
        /></a>
        <h2>Párysův rybářský ráj</h2>
        <h3>Prodejna:</h3>
        <p>
          Průmyslová 1292, Jičín <br />
          <b>telefon:</b> 774 411 193 <br />
          <b>e-mail: </b><a href="mailto:info@parys.cz">info@parys.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <a href="https://www.fishhunt.cz/index.php" target="_blank"
          ><img
            src="../assets/loga/fish-hunt.jpg"
            alt="Logo prodejce Fish and Hunt"
        /></a>
        <h2>Fish & Hunt</h2>
        <h3>Prodejna:</h3>
        <p>
          Kolínská 94, Nová Ves I <br />
          <b>telefon:</b> 774 377 133 <br />
          <b>e-mail: </b><a href="mailto:shop@fishhunt.cz">shop@fishhunt.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <a href="https://www.bushcraftshop.cz" target="_blank"
          ><img
            src="../assets/loga/bushcraftshop.jpg"
            alt="Logo prodejce Bushcraft"
        /></a>
        <h2>BUSHCRAFTshop.cz</h2>
        <h3>Prodejny:</h3>
        <p>
          Jesenická 22, Šumperk<br />
          <b>telefon:</b> 605 011 644 <br />
          <br />
          Na Václavce 28, Praha 5<br />
          <b>telefon:</b> 737 730 056 <br />
          <b>e-mail: </b
          ><a href="mailto:info@bushcraftshop.cz">info@bushcraftshop.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <a href="https://www.hanibal.cz" target="blank"
          ><img src="../assets/loga/hanibal.jpg" alt="Logo prodejce Hanibal"
        /></a>
        <h2>Hanibal</h2>
        <h3>Prodejny:</h3>
        <p>
          Korunní 16, Praha 2 <br />
          Senovážné náměstí 20, Praha 1<br />
          Orlí 20, Brno<br />
          <b>telefon:</b> 220 920 820 <br />
          <b>e-mail: </b><a href="mailto:info@hanibal.cz">info@hanibal.cz</a>
        </p>
      </div>
      <div class="prodejce">
        <a href="https://www.ceskyraj.com" target="blank"
          ><img
            src="../assets/loga/cesky-raj.jpg"
            alt="Logo prodejce Český ráj outdoor"
        /></a>
        <h2>Český ráj outdoor</h2>
        <h3>Prodejna:</h3>
        <p>
          Staroměstské náměstí 20/21<br />
          Mladá Boleslav<br />
          <b>telefon:</b> 326 211 050 <br />
          <b>e-mail: </b
          ><a href="mailto:ceskyraj@ceskyraj.com">ceskyraj@ceskyraj.com</a>
        </p>
      </div>
    </div>
    <div class="kontakt">
      <h1>Oficiální distribuce</h1>
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
          <a
            href="mailto:obchod@woolpower.cz?subject=Zpráve z webu Woolpower.cz"
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
  </div>
</template>
<script>
export default {
  name: "kontakt",
};
</script>
<style scoped>
h1,
h2 {
  text-align: center;
}

h3 {
  margin-bottom: 0;
}

hr {
  border-top: 1px dashed darkgray;
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
  padding: 1rem;
  border: 1px solid rgb(241, 241, 241);
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgb(165, 164, 164);
}

.prodejce h2 {
  font-size: 20px;
  margin-top: 0;
}

.prodejce img {
  width: 100%;
  margin: 0;
}
.kontakt {
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
.kontakt a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: underline;
}
.kontakt a:visited {
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
  .text {
    position: absolute;
    padding: 1rem;
    margin: 0 auto;
    top: 180px;
    left: 20vw;
    min-width: 60vw;
  }
}
@media (min-width: 1024px) {
  .pozadi {
    width: 80vw;
    margin-bottom: 2rem;
  }
}
</style>
