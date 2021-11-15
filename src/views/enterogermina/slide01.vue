<template>
  <div class="fondo2">
    <div class="mage1 animate__animated animate__fadeInLeftBig">
      <img src="/images/mage1.png" alt="" />
    </div>

    <div class="mage2 animate__animated animate__backInLeft">
      <img id="pop" src="/images/mage2.png" alt="" />
    </div>
    

    <!-- carrousel -->
    <div class="seguir" @click.prevent="toSlide1"></div>
    <div class="seguir1" @click.prevent="toSlide2"></div>

    <!-- Navegacion -->
    <router-link class="boton1" to="/enterogermina/02"></router-link>

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
  name: "Enterogermina_01",
  mounted() {
    $(".mage2").css("top", "43.1%");
  },
  methods: {
    toSlide2() {
      $("#pop").attr("src", "/images/mage3.png");
      $(".mage2").css("top", "50.1%");
    },
    toSlide1() {
      $("#pop").attr("src", "/images/mage2.png");
      $(".mage2").css("top", "43.1%");
    },
  },
};
</script>