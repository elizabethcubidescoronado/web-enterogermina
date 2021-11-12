<template>
  <div class="buscap4">

    <!-- modal -->
    <div class="lupam1" @click.prevent="openModal"></div>
    <div class="lupaRm2" @click.prevent="openModal1"></div>
    <div class="lupaRm3" @click.prevent="openModal2"></div>
    <div class="lupaRm4" @click.prevent="openModal3"></div>

    <!-- pop up -->
    <div class="popup50" style="display: none">
      <img id="ope" src="/images/pot1.jpg" alt="" />
      <div class="cerrar51" @click.prevent="closeModal"></div>
    </div>

     <!-- pop up 2-->
    <div class="popup52" style="display: none">
      <img id="ope1" src="/images/pot2.jpg" alt="" />
      <div class="cerrar53" @click.prevent="closeModal1"></div>
    </div>

    <!-- pop up 3-->
    <div class="popup54" style="display: none">
      <img id="ope2" src="/images/pot3.jpg" alt="" />
      <div class="cerrar55" @click.prevent="closeModal2"></div>
    </div>

    <!-- pop up 4-->
    <div class="popup56" style="display: none">
      <img id="ope2" src="/images/pot4.jpg" alt="" />
      <div class="cerrar57" @click.prevent="closeModal3"></div>
    </div>
    

    <!-- navegacion -->
    <router-link class="boton1" to="/buscapina/05"></router-link>
    <router-link class="after" to="/buscapina/03"></router-link>


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
  name: "Buscapina_04",

  methods: {
      closeModal(){
          $('.popup50').css('display', 'none')
      },
      openModal(){
          $('.popup50').css('display', 'block')
      },
      closeModal1(){
          $('.popup52').css('display', 'none')
      },
      openModal1(){
          $('.popup52').css('display', 'block')
      },
      closeModal2(){
          $('.popup54').css('display', 'none')
      },
      openModal2(){
          $('.popup54').css('display', 'block')
      },
      closeModal3(){
          $('.popup56').css('display', 'none')
      },
      openModal3(){
          $('.popup56').css('display', 'block')
      }
  }
};
</script>