<template>
  <div class="obsah">
    <h2>Vrstvení oblečení</h2>
    <p>Oblečení firmy Woolpower pomáhá udržovat vyprodukované teplo u těla a zároveň odvádět přebytečnou vlhkost pryč.</p>
    <p>Jedním z velmi užitečných a léty osvědčených tipů, jak se obléceni nejen za chladného počasí, je vrstvení oblčení. Více vrtvev poskytne flexibilitu v míře izolace. Je-li příliž chladno, vrstva se přidá, je-li naopak teplo, vrstva se ubere.</p>
    <p>Nabídka produktů Woolpower je navržená tak, aby jednotlivé kousky byly různě kombinovatelné podle momentální potřeby a plánované aktivity. Produkty z řady Lite jsou vhodné jako první vrstva či jako samostatná vrtva do teplejších podmínek. Řada Ullfrtotté je vhodná jako druhá vrtva. V případě velmi chladného počasí ji lze použít i jako opravdu teplou základní vrstvu.</p>
    <div class="vrstvy">
      <div class="zakladni__vrstva">
        <div class="text">
          <h4>První vrstva</h4>Povídání o základní vrstvě Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sed eos sapiente quae libero. Dignissimos eveniet exercitationem voluptatum corrupti hic porro suscipit, sint nesciunt, magnam et cumque, saepe iste provident.
        </div>
        <img src="../assets/AfterSki.jpg" alt="Odpočinek po lyžování" />
      </div>
      <div class="druha__vrstva">
        <div class="text">
          <h4>Druhá vrstva</h4>Povídání o druhé vrstvě. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum delectus doloribus deserunt explicabo excepturi voluptates vero beatae repudiandae dolor necessitatibus facilis autem ducimus amet illum qui saepe, nemo provident blanditiis!
        </div>
        <img src="../assets/Woodwork.jpg" alt="Pohodička na chatě" />
      </div>
    </div>
    <h4>Třetí vrtva</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta id nesciunt rem sapiente necessitatibus quod commodi quidem assumenda. Sint repellat, voluptatibus molestiae dicta id rem optio dolorum iusto. Placeat!</p>
    <h4>čtvrtá vrtva</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, optio tempora maxime veniam necessitatibus omnis hic voluptas nostrum doloremque, assumenda, fugit adipisci illum perspiciatis! Nisi delectus exercitationem velit a suscipit.</p>
  </div>
</template>
<script>
export default {
  name: "Vrstvy",
};
</script>
<style scoped>
.obsah {
  padding: 0 10vw;
  margin-bottom: 1rem;
}
.vrstvy {
  display: flex;
  flex-direction: column;
}
.vrstvy img {
  width: 100%;
  height: auto;
  flex: 1 0 50%;
}

.zakladni__vrstva,
.druha__vrstva {
  display: flex;
  flex-direction: column;
}

.text {
  padding: 1rem;
  flex: 1 0 50%;
  font-size: 1rem;
  background-color: rgb(212, 211, 211);
}

@media (min-width: 640px) {
  .vrstvy {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .vrstvy img {
    width: 50%;
    height: auto;
    flex: 1 0 50%;
  }
  .zakladni__vrstva {
    flex-direction: row;
  }
  .druha__vrstva {
    flex-direction: row-reverse;
  }
}
@media (min-width: 1024px) {
  /* .zakladni__vrstva,
  .druha__vrstva {
    min-height: 500px;
  } */
}
</style>