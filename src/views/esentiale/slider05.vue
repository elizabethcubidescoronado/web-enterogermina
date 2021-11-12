<template>
  <div class="sym">
    
    
    <!-- modal -->
    <div class="lupaR9" @click.prevent="openModal"></div>
    <div class="lupaR0" @click.prevent="openModal1"></div>
    <div class="lupaR10" @click.prevent="openModal2"></div>

    <!-- pop up -->
    <div class="popup0" style="display: none">
      <img id="ope" src="/images/pop-sentia.jpg" alt="" />
      <div class="cerrar77" @click.prevent="closeModal"></div>
    </div>

     <!-- pop up 2-->
    <div class="popup1" style="display: none">
      <img id="ope1" src="/images/pop-esent1.jpg" alt="" />
      <div class="cerrar8" @click.prevent="closeModal1"></div>
    </div>

    <!-- pop up 3-->
    <div class="popup10" style="display: none">
      <img id="ope2" src="/images/pop-esent3.jpg" alt="" />
      <div class="cerrar10" @click.prevent="closeModal2"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="boton1" to="/esentiale/06"></router-link>
    <router-link class="after" to="/esentiale/04"></router-link>

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
  name: "Esentiale_05",
  methods: {
      closeModal(){
          $('.popup0').css('display', 'none')
      },
      openModal(){
          $('.popup0').css('display', 'block')
      },
      closeModal1(){
          $('.popup1').css('display', 'none')
      },
      openModal1(){
          $('.popup1').css('display', 'block')
      },
      closeModal2(){
          $('.popup10').css('display', 'none')
      },
      openModal2(){
          $('.popup10').css('display', 'block')
      }
  }
};
</script>