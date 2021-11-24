<template>
  <div class="ale">
    <div class="ban animate__animated animate__fadeInLeft">
      <img src="/images/ban.png" alt="" />
    </div>

    <!-- navegacion -->
    <router-link class="boton" to="/allegra/02"></router-link>

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
  name: "Allegra_01",
};
</script>