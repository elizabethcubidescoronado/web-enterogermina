<template>
  <div class="fondo6">
    <div class="mark animate__animated animate__fadeInDown">
      <img src="/images/mark.png" alt="" />
    </div>
    <div class="mark1 animate__animated animate__fadeInUp">
      <img src="/images/mark1.png" alt="" />
    </div>
    <div class="mark2 animate__animated animate__fadeInDown">
      <img src="/images/mark2.png" alt="" />
    </div>
    <div id="ope1" class="mark3 animate__animated animate__fadeInUp">
      <img src="/images/mark3.png" alt="" />
    </div>
    <div class="mark6 animate__animated animate__backInLeft">
      <img src="/images/mark6.png" alt="" />
    </div>
    <div class="espora_azul-432 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="185%" width="185%" />
    </div>
    <div class="espora_azul-532 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="7%" width="7%" />
    </div>
    <div class="espora_verde-2357 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="4%" width="4%" />
    </div>
    <div class="espora_naranja-245 animate__animated animate__fadeInDown">
      <img src="/images/bola-naranja.png" alt="" height="127%" width="127%" />
    </div>
    <div class="lupaR2" @click.prevent="openModal"></div>
    <div class="lupaR3" @click.prevent="openModal1"></div>

    <!-- pop up -->
    <div class="popup1" style="display: none">
      <img id="ope" src="/images/pop3.jpg" alt="" />
      <div class="cerrar6" @click.prevent="closeModal"></div>
    </div>

    <!-- pop up 2-->
    <div class="popup2" style="display: none">
      <div class="popuprt1120">
        <img
          id="ope111"
          src="/images/pop4.jpg"
          alt=""
          @click.prevent="playVideo"
        />
        <video
          id="video1"
          src="/enterogermina.mp4"
          controls
          style="display: none"
        ></video>
        <div class="cerrar17" @click.prevent="closeModal1">
          <img class="botoncerrar1" src="/images/botoncerrar.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/06"></router-link>
    <router-link class="after1" to="/enterogermina/04"></router-link>

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
  name: "Enterogermina_05",
  methods: {
    closeModal() {
      window.location.reload()
      $(".popup1").css("display", "none");


    },
    openModal() {
      $(".popup1").css("display", "block");
    },
    closeModal1() {
      $(".popup2").css("display", "none");
      $("#ope111").css("display", "block");
      $("#video1").css("display", "none");
      $("#video1").trigger("pause");
    },
    openModal1() {
      $(".popup2").css("display", "block");
    },
    playVideo() {
      $("#ope111").css("display", "none");
      $("#video1").css("display", "block");
    },
  },
};
</script>