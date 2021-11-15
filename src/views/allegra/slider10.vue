<template>
  <div class="ale9">



    <!-- modal -->
    <div class="lupita12" @click.prevent="openModal9"></div>
    <div class="lupita15" @click.prevent="openModal10"></div>


    <!-- pop up 1-->
    <div class="popup90" style="display: none">
      <img id="ope" src="/images/upallegra1.jpg" alt="" />
      <div class="cerrar65" @click.prevent="closeModal9"></div>
    </div>

    <!-- pop up 2-->
    <div class="popup50" style="display: none">
      <img id="ope" src="/images/upallegra.jpg" alt="" />
      <div class="cerrar67" @click.prevent="closeModal10"></div>
    </div>



    <!-- navegacion -->
    <router-link class="boton1" to="/allegra/11"></router-link>
    <router-link class="after" to="/allegra/09"></router-link>

    <router-link class="home" to="/"></router-link>
    <router-link class="enterogermina" to="/enterogermina/01"></router-link>
    <router-link class="dulcolax" to="/dulcolax/01"></router-link>
    <router-link class="esentiale" to="/esentiale/01"></router-link>
    <router-link class="buscapina" to="/buscapina/01"></router-link>
    <router-link class="allegra" to="/allegra/01"></router-link>
    <router-link class="pharmathon" to="/pharmaton/01"></router-link>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Allegra_10",
  methods: {
      closeModal9(){
          $('.popup90').css('display', 'none')
      },
      openModal9(){
          $('.popup90').css('display', 'block')
      },
      closeModal10(){
          $('.popup50').css('display', 'none')
      },
      openModal10(){
          $('.popup50').css('display', 'block')
      },
  }
};
</script>