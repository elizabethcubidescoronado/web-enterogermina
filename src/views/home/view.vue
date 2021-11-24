<template>
  <div class="hom">
    <div class="hom-1 animate__animated animate__backInLeft">
      <img src="/images/hom-1.png" alt="" />
    </div>
    <div class="hom-2 animate__animated animate__backInRight">
      <img src="/images/hom-2.png" alt="" />
    </div>


    <!-- navegacion -->
    <router-link class="boton" to="/enterogermina/01"></router-link>

    <router-link class="home" to="/"></router-link>
    <router-link class="enterogermina" to="/enterogermina/1"></router-link>
    <router-link class="dulcolax" to="/dulcolax/01"></router-link>
    <router-link class="esentiale" to="/esentiale/01"></router-link>
    <router-link class="buscapina" to="/buscapina/01"></router-link>
    <router-link class="allegra" to="/allegra/01"></router-link>
    <router-link class="pharmathon" to="/pharmaton/01"></router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>