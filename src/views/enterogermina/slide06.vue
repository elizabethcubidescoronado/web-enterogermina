<template>
  <div class="fondo7">
    <div class="port animate__animated animate__pulse">
      <img src="/images/port1.png" alt="" />
    </div>
    <div class="port1 animate__animated animate__bounce">
      <img src="/images/port.png" alt="" />
    </div>

    <div class="lupaR4" @click.prevent="openModal"></div>
    <div class="lupaR5" @click.prevent="openModal1"></div>

    <!-- pop up -->
    <div class="popup2" style="display: none">
      <img id="ope" src="/images/pop5.jpg" alt="" />
      <div class="cerrar" @click.prevent="closeModal"></div>
    </div>

     <!-- pop up 2-->
    <div class="popup3" style="display: none">
      <img id="ope1" src="/images/pop52.jpg" alt="" />
      <div class="cerrar2" @click.prevent="closeModal1"></div>
    </div>



    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/07"></router-link>
    <router-link class="after1" to="/enterogermina/05"></router-link>

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
  name: "Enterogermina_06",
  methods: {
      closeModal(){
          $('.popup2').css('display', 'none')
      },
      openModal(){
          $('.popup2').css('display', 'block')
      },
      closeModal1(){
          $('.popup3').css('display', 'none')
      },
      openModal1(){
          $('.popup3').css('display', 'block')
      }
  }
};
</script>