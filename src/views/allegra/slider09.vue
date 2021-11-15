<template>
  <div class="ale8">
    <div class="part8 animate__animated animate__slideInDown">
      <img src="/images/part8.png" alt="" />
    </div>
    <div class="part9 animate__animated animate__slideInLeft">
      <img src="/images/part9.png" alt="" />
    </div>
    <div class="part10 animate__animated animate__slideInRight">
      <img src="/images/part10.png" alt="" />
    </div>

    <!-- modal -->
    <div class="lupita0" @click.prevent="openModal"></div>
    <div class="lupita1" @click.prevent="openModal1"></div>
    <div class="lupita2" @click.prevent="openModal2"></div>

    <!-- pop up 1-->
    <div class="popup74" style="display: none">
      <img id="ope" src="/images/popallegra1.jpg" alt="" />
      <div class="cerrar61" @click.prevent="closeModal"></div>
    </div>

    <!-- pop up 2-->
    <div class="popup75" style="display: none">
      <img id="ope" src="/images/poallegra2.jpg" alt="" />
      <div class="cerrar62" @click.prevent="closeModal1"></div>
    </div>

    <!-- pop up 3-->
    <div class="popup76" style="display: none">
      <img id="opePopup3" src="/images/popallegra3.jpg" alt="" />
      <div class="cerrar63" @click="closeModal2"></div>
      <div id="toSlide1"></div>
      <div id="toSlide2"></div>
      <div id="toSlide3"></div>
    </div>
    <div class="popup77" style="display: none">
      <img id="ope" src="/images/popallegra4.jpg" alt="" />
      <div class="cerrar63"></div>
    </div>

    <!-- carrousel -->
    <div class="pop" @click.prevent="toSlide1"></div>
    <div class="pop1" @click.prevent="toSlide2"></div>

    <!-- navegacion -->
    <router-link class="boton1" to="/allegra/10"></router-link>
    <router-link class="after" to="/allegra/08"></router-link>

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
  name: "Allegra_09",
  beforeMount(){
    this.initialFunction();
  },
  methods: {
    initialFunction(){
      $(document).ready(() => {
        $("#toSlide1").on('click', () => {
          $("#opePopup3").attr("src", "/images/popallegra3.jpg");
        });

        $("#toSlide2").on('click', () => {
          $("#opePopup3").attr("src", "/images/popallegra4.jpg");
        });

        $("#toSlide3").on('click', () => {
          $("#opePopup3").attr("src", "/images/popallegra5.jpg");
        });

        $("#toSlide3").on('click', () => {
          $("#opePopup3").attr("src", "/images/popallegra5.jpg");
        });
      })
    },
    closeModal() {
      $(".popup74").css("display", "none");
    },
    openModal() {
      $(".popup74").css("display", "block");
    },
    closeModal1() {
      $(".popup75").css("display", "none");
    },
    openModal1() {
      $(".popup75").css("display", "block");
    },
    closeModal2() {
      $(".popup76").css("display", "none");
    },
    openModal2() {
      $(".popup76").css("display", "block");
    },
  },
};
</script>