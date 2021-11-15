<template>
  <div class="ale6">
    <div class="part animate__animated animate__fadeInRight">
      <img src="/images/part.png" alt="" />
    </div>
    <div class="part1 animate__animated animate__fadeInRight">
      <img src="/images/part1.png" alt="" />
    </div>
    <div class="part2 animate__animated animate__fadeInRight">
      <img src="/images/part2.png" alt="" />
    </div>


    <!-- navegacion -->
    <router-link class="boton1" to="/allegra/08"></router-link>
    <router-link class="after" to="/allegra/06"></router-link>

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
  name: "Allegra_07",
};
</script>