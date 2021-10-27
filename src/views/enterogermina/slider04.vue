<template>
  <div class="fondo5">
      <div class="lead animate__animated animate__bounce">
          <img src="/images/lead.png" alt="">
      </div>
      <div class="lead1 animate__animated animate__rotateIn">
          <img src="/images/lead1.png" alt="">
      </div>
      <div class="lead2 animate__animated animate__zoomIn">
          <img src="/images/lead2.png" alt="">
      </div>
      <div class="lupaR1" @click.prevent="openModal"></div>

       <!-- pop up -->
    <div class="popup" style="display: none">
        <img id="ope" src="/images/pop2.jpg" alt="">
        <div class="cerrar" @click.prevent="closeModal"></div>
    </div>


    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/05"></router-link>
    <router-link class="after1" to="/enterogermina/03"></router-link>

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
  name: "Enterogermina_04",
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