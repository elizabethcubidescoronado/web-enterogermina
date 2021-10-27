<template>
  <div class="fondo3">
    <div class="po1 animate__animated animate__bounce">
      <img src="/images/po1.png" alt="" />
    </div>
    <div class="po2 animate__animated animate__fadeIn">
      <img src="/images/po2.png" alt="" />
    </div>

    <!-- Navegacion -->
    <router-link class="nest" to="/enterogermina/03"></router-link>
    <router-link class="after" to="/enterogermina/01"></router-link>

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
export default {
  name: "Enterogermina_02",
};
</script>