<template>
  <div class="pharma2">
    <div class="titulo animate__animated animate__slideInDown">
      <img src="/images/titulo.png" alt="" />
    </div>
    <div class="text animate__animated animate__slideInDown">
      <img src="/images/text.png" alt="" />
    </div>
    <div class="text1 animate__animated animate__slideInDown">
      <img src="/images/text1.png" alt="" />
    </div>


    <!-- navegacion -->
    <router-link class="boton1" to="/pharmaton/04"></router-link>
    <router-link class="after" to="/pharmaton/02"></router-link>

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
export default {
  name: "Pharmaton_03",
};
</script>