<template>
  <div class="fondo5">
    <div class="lead animate__animated animate__bounce">
      <img src="/images/lead.png" alt="" />
    </div>
    <div class="lead1 animate__animated animate__rotateIn">
      <img src="/images/lead1.png" alt="" />
    </div>
    <div class="lead2 animate__animated animate__zoomIn">
      <img src="/images/lead2.png" alt="" />
    </div>
    <div class="espora_azul-234 animate__animated animate__fadeInDown">
      <img src="/images/espora_azul.png" alt="" height="185%" width="185%" />
    </div>
    <div class="espora_azul-235 animate__animated animate__fadeInDown">
      <img src="/images/espora_azul.png" alt="" height="7%" width="7%" />
    </div>
        <div class="espora_verde-235 animate__animated animate__fadeInDown">
      <img src="/images/espora_verde.png" alt="" height="4%" width="4%" />
    </div>

    <div class="lupaR1" @click.prevent="openModal"></div>

    <!-- pop up -->
    <div class="popup" style="display: none">
      <img id="ope" src="/images/pop2.jpg" alt="" />
      <div class="cerrar14" @click.prevent="closeModal"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/05"></router-link>
    <router-link class="after1" to="/enterogermina/03"></router-link>

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
  name: "Enterogermina_04",
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