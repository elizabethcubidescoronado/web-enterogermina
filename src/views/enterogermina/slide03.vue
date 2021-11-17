<template>
  <div class="fondo4">
    <div class="heder animate__animated animate__rotateInDownRight">
      <img src="/images/header.png" alt="" />
    </div>
    <div class="lat animate__animated animate__rotateInDownRight">
      <img src="/images/lat.png" alt="" />
    </div>
    <div class="lat1 animate__animated animate__fadeInDown">
      <img src="/images/lat1.png" alt="" />
    </div>
    <div class="lat3 animate__animated animate__pulse">
      <img src="/images/lat3.png" alt="" />
    </div>
    <div class="lupaR" @click.prevent="openModal">
      <img src="/images/lupaR.png" alt="" />
    </div>
    <div class="espora_verde-12 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="88%" width="88%" />
    </div>
    <div class="espora_azul-12 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="128%" width="128%" />
    </div>
    <div class="espora_azul-123 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="9%" width="9%" />
    </div>
    <div class="espora_naranja155 animate__animated animate__fadeInDown">
      <img src="/images/bola-naranja.png" alt="" height="7%" width="7%" />
    </div>
    <!-- pop up -->
    <div class="popup" style="display: none">
      <img id="ope" src="/images/popup.jpg" alt="" />
      <div class="cerrar12" @click.prevent="closeModal"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/04"></router-link>
    <router-link class="after1" to="/enterogermina/02"></router-link>

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
  name: "Enterogermina_03",
  methods: {
    closeModal() {
      $(".popup").css("display", "none");
    },
    openModal() {
      $(".popup").css("display", "block");
    },
  },
};
</script>