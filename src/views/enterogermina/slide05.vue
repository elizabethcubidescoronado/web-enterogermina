<template>
  <div class="fondo6">
    <div class="mark animate__animated animate__rotateInDownLeft">
      <img src="/images/mark.png" alt="" />
    </div>
    <div class="mark1 animate__animated animate__rotateIn">
      <img src="/images/mark1.png" alt="" />
    </div>
    <div class="mark2 animate__animated animate__bounce">
      <img src="/images/mark2.png" alt="" />
    </div>
    <div class="lupaR2" @click.prevent="openModal"></div>
    <div class="lupaR3" @click.prevent="openModal1"></div>

    <!-- pop up -->
    <div class="popup1" style="display: none">
      <img id="ope" src="/images/pop3.jpg" alt="" />
      <div class="cerrar" @click.prevent="closeModal"></div>
    </div>

     <!-- pop up 2-->
    <div class="popup2" style="display: none">
      <img id="ope1" src="/images/pop4.jpg" alt="" />
      <div class="cerrar1" @click.prevent="closeModal1"></div>
    </div>

    <!-- Navegacion -->
    <router-link class="nest1" to="/enterogermina/06"></router-link>
    <router-link class="after1" to="/enterogermina/04"></router-link>

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
  name: "Enterogermina_05",
  methods: {
      closeModal(){
          $('.popup1').css('display', 'none')
      },
      openModal(){
          $('.popup1').css('display', 'block')
      },
      closeModal1(){
          $('.popup2').css('display', 'none')
      },
      openModal1(){
          $('.popup2').css('display', 'block')
      }
  }
};
</script>