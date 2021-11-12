<template>
  <div class="dulco">
    <div class="titulo1 animate__animated animate__fadeInDown">
      <img src="/images/dulco.png" alt="" />
    </div>

    <!-- navegacion -->
    <router-link class="boton" to="/dulcolax/02"></router-link>

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
  name: "Dulcolax_01",
};
</script>