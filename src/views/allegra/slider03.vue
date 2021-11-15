<template>
  <div class="ale2">
    <div class="banner animate__animated animate__backInDown">
      <img src="/images/banner.png" alt="" />
    </div>
        <div class="banner1 animate__animated animate__backInLeft">
      <img src="/images/banner1.png" alt="" />
    </div>
        <div class="banner2 animate__animated animate__backInDown">
      <img src="/images/banner2.png" alt="" />
    </div>
        <div class="banner3 animate__animated animate__backInLeft">
      <img src="/images/banner3.png" alt="" />
    </div>

    <!-- navegacion -->
    <router-link class="boton1" to="/allegra/04"></router-link>
    <router-link class="after" to="/allegra/02"></router-link>

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
  name: "Allegra_03",
};
</script>