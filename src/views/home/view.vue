<template>
  <div class="fondo">
    <div class="foto1 animate__animated animate__tada">
      <img src="/images/u1.png" alt="" />
    </div>
    <div class="foto2 animate__animated animate__pulse slow">
      <img src="/images/up.png" alt="" />
    </div>
    <div>
        <img class="titulo101 animate__animated animate__fadeInDown" src="images/FR.png" alt="">
    </div>

    <!-- navegacion -->
    <router-link class="boton" to="/enterogermina/01"></router-link>

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
  name: "Home",
};
</script>