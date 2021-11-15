<template>
  <div class="pharma">
    <div class="parma animate__animated animate__slideInUp">
      <img src="/images/pharma1.png" alt="" />
    </div>

    <!-- navegacion -->
    <router-link class="boton" to="/pharmaton/02"></router-link>

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
  name: "Pharmaton_01",
};
</script>