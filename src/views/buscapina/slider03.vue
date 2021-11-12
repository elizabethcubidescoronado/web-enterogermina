<template>
  <div class="buscap">

    <!-- modal -->
    <div class="lupaR00" @click.prevent="openModal"></div>
    <div class="lupaR05" @click.prevent="openModal1"></div>
    <div class="lupaR101" @click.prevent="openModal2"></div>

    <!-- pop up -->
    <div class="popup40" style="display: none">
      <img id="ope" src="/images/port12.jpg" alt="" />
      <div class="cerrar41" @click.prevent="closeModal"></div>
    </div>

     <!-- pop up 2-->
    <div class="popup19" style="display: none">
      <img id="ope1" src="/images/port13.jpg" alt="" />
      <div class="cerrar81" @click.prevent="closeModal1"></div>
    </div>

    <!-- pop up 3-->
    <div class="popup102" style="display: none">
      <img id="ope2" src="/images/port14.jpg" alt="" />
      <div class="cerrar105" @click.prevent="closeModal2"></div>
    </div>
    

    <!-- navegacion -->
    <router-link class="boton1" to="/buscapina/04"></router-link>
    <router-link class="after" to="/buscapina/02"></router-link>


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
  name: "Buscapina_03",

  methods: {
      closeModal(){
          $('.popup40').css('display', 'none')
      },
      openModal(){
          $('.popup40').css('display', 'block')
      },
      closeModal1(){
          $('.popup19').css('display', 'none')
      },
      openModal1(){
          $('.popup19').css('display', 'block')
      },
      closeModal2(){
          $('.popup102').css('display', 'none')
      },
      openModal2(){
          $('.popup102').css('display', 'block')
      }
  }
};
</script>