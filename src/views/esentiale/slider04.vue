<template>
  <div class="red4">
    <div class="UP animate__animated animate__fadeInDown">
      <img src="/images/up1.png" alt="" />
    </div>
    <div class="UP1 animate__animated animate__fadeInLeft">
      <img src="/images/UP2.png" alt="" />
    </div>
    <div class="UP2 animate__animated animate__fadeInLeft">
      <img src="/images/UP3.png" alt="" />
    </div>

    <!-- navegacion -->
    <router-link class="boton1" to="/esentiale/05"></router-link>
    <router-link class="after" to="/esentiale/03"></router-link>

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
  name: "Esentiale_04",
};
</script>