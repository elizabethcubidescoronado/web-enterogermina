<template>
  <div class="buscap7">
    <div class="buscapin20 animate__animated animate__fadeInDownBig">
      <img src="/images/buscapin20.png" alt="" />
    </div>
    <div class="buscapin21 animate__animated animate__fadeInUpBig">
      <img src="/images/buscapin21.png" alt="" />
    </div>
    <div class="buscapin22 animate__animated animate__fadeInUpBig">
      <img src="/images/buscapin22.png" alt="" />
    </div>
    <!-- modal -->
    <div class="lupam8" @click.prevent="openModal"></div>

    <!-- pop up -->
    <div class="popuprt" style="display: none">
      <div class="popuprt120">
        <img
          id="ope"
          src="/images/pot5.jpg"
          alt=""
          @click.prevent="playVideo"
        />
        <video
          id="video"
          src="/comercial buscapina.mp4"
          controls
          style="display: none"
        ></video>
        <div class="cerrar601" @click.prevent="closeModal">
          <img class="botoncerrar" src="/images/botoncerrar.png" alt="" />
        </div>
      </div>
    </div>

    <!-- navegacion -->
    <!-- <router-link class="boton1" to="/buscapina/07"></router-link> -->
    <router-link class="after" to="/buscapina/05"></router-link>

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
  name: "Buscapina_06",

  methods: {
    closeModal() {
      $(".popuprt").css("display", "none");
      $("#ope").css("display", "block");
      $("#video").css("display", "none");
    },
    openModal() {
      $(".popuprt").css("display", "block");
    },
    playVideo() {
      $("#ope").css("display", "none");
      $("#video").css("display", "block");
    },
  },
};
</script>