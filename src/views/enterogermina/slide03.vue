<template>
  <div class="fondo4">
    <div class="lat animate__animated animate__fadeIn">
        <img src="/images/lat.png" alt="">
    </div>
    <div class="lat1 animate__animated animate__fadeInDown">
        <img src="/images/lat1.png" alt="">
    </div>
    <div class="lat3 animate__animated animate__pulse">
        <img src="/images/lat3.png" alt="">
    </div> 
    <div class="lupaR" @click.prevent="openModal">
        <img src="/images/lupaR.png" alt="">
    </div>

    <!-- pop up -->
    <div class="popup" style="display: none">
        <img id="ope" src="/images/popup.jpg" alt="">
        <div class="cerrar" @click.prevent="closeModal"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/04"></router-link>
    <router-link class="after1" to="/enterogermina/02"></router-link>

    <router-link class="home" to="/"></router-link>
    <router-link class="enterogermina" to="/"></router-link>
    <router-link class="dulcolax" to="/"></router-link>
    <router-link class="esentiale" to="/"></router-link>   
    <router-link class="buscapina" to="/"></router-link>
    <router-link class="allegra" to="/"></router-link>
    <router-link class="pharmathon" to="/"></router-link>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "Enterogermina_03",
  methods: {
      closeModal(){
          $('.popup').css('display', 'none')
      },
      openModal(){
          $('.popup').css('display', 'block')
      }
  }
};
</script>