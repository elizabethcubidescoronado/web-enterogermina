<template>
  <div class="buscap7">

    <!-- modal -->
    <div class="lupam8" @click.prevent="openModal"></div>

    <!-- pop up -->
    <div class="popuprt" style="display: none">
      <img id="ope" src="/images/pot5.jpg" alt="" />
      <div class="cerrar601" @click.prevent="closeModal"></div>
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
import $ from 'jquery'
export default {
  name: "Buscapina_06",

  methods: {
      closeModal(){
          $('.popuprt').css('display', 'none')
      },
      openModal(){
          $('.popuprt').css('display', 'block')
      }
      }


};
</script>