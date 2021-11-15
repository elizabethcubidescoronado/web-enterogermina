<template>
  <div class="ale7">
    <div class="part3 animate__animated animate__backInDown">
      <img src="/images/part3.png" alt="" />
    </div>
    <div class="part4 animate__animated animate__backInLeft">
      <img src="/images/part4.png" alt="" />
    </div>
    <div class="part5 animate__animated animate__backInDown">
      <img src="/images/part5.png" alt="" />
    </div>

    <div class="part6 animate__animated animate__backInLeft">
      <img src="/images/part6.png" alt="" />
    </div>
        <div class="part7 animate__animated animate__backInDown">
      <img src="/images/part7.png" alt="" />
    </div>

        <!-- modal -->
    <div class="lupita" @click.prevent="openModal"></div>

    <!-- pop up -->
    <div class="popup73" style="display: none">
      <img id="ope" src="/images/popallegra.jpg" alt="" />
      <div class="cerrar60" @click.prevent="closeModal"></div>
    </div>
    <!-- navegacion -->
    <router-link class="boton1" to="/allegra/09"></router-link>
    <router-link class="after" to="/allegra/07"></router-link>

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
  name: "Allegra_08",
  methods: {
    closeModal() {
      $(".popup73").css("display", "none");
    },
    openModal() {
      $(".popup73").css("display", "block");
    },
  },
};
</script>