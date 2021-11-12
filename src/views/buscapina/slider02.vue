<template>
  <div class="buscapin1">

    <!-- modal -->
    <div class="lupap2" @click.prevent="openModal"></div>

    <!-- pop up -->
    <div class="popup01" style="display: none">
      <img id="ope" src="/images/popbuscapina.jpg" alt="" />
      <div class="cerrar20" @click.prevent="closeModal"></div>
    </div>

    <!-- navegacion -->
    <router-link class="boton1" to="/buscapina/03"></router-link>

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
  name: "Buscapina_02",
  methods: {
    closeModal() {
      $(".popup01").css("display", "none");
    },
    openModal() {
      $(".popup01").css("display", "block");
    },
  },
};
</script>