<template>
  <div class="fondo7">
    <div class="port animate__animated animate__pulse">
      <img src="/images/port1.png" alt="" />
    </div>
    <div class="port1 animate__animated animate__fadeInLeft">
      <img src="/images/port.png" alt="" />
    </div>
    <div class="espora_azul-555 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="185%" width="185%" />
    </div>
    <div class="espora_azul-556 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="7%" width="7%" />
    </div>
    <div class="espora_verde-557 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="137%" width="137%" />
    </div>
    <div class="lupaR4" @click.prevent="openModal"></div>
    <div class="lupaR5" @click.prevent="openModal1"></div>

    <!-- pop up -->
    <div class="popup2" style="display: none">
      <img id="ope" src="/images/pop5.jpg" alt="" />
      <div class="cerrar21" @click.prevent="closeModal"></div>
    </div>

    <!-- pop up 2-->
    <div class="popup3" style="display: none">
      <img id="ope1" src="/images/pop52.jpg" alt="" />
      <div class="cerrar22" @click.prevent="closeModal1"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/07"></router-link>
    <router-link class="after1" to="/enterogermina/05"></router-link>

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
  name: "Enterogermina_06",
  methods: {
    closeModal() {
      $(".popup2").css("display", "none");
    },
    openModal() {
      $(".popup2").css("display", "block");
    },
    closeModal1() {
      $(".popup3").css("display", "none");
    },
    openModal1() {
      $(".popup3").css("display", "block");
    },
  },
};
</script>