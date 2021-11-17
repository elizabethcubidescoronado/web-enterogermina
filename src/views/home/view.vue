<template>
  <div class="fondo">
    <div class="foto1 animate__animated animate__tada">
      <img src="/images/u1.png" alt="" />
    </div>
    <div class="foto2 animate__animated animate__pulse slow">
      <img src="/images/up.png" alt="" />
    </div>
    <div class="espora_azul animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="8.5%" width="8.5%" />
    </div>
    <div class="espora_azul1 animate__animated animate__fadeInDown">
      <img src="/images/bola-azul.png" alt="" height="55%" width="55%" />
    </div>
    <div class="espora_azul2 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="35%" width="35%" />
    </div>
    <div class="espora_azul311 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="5%" width="5%" />
    </div>
    <div class="espora_azul4 animate__animated animate__fadeInDown">
      <img src="/images/bola-verde.png" alt="" height="6%" width="6%" />
    </div>
    <div>
      <img
        class="titulo101 animate__animated animate__fadeInDown"
        src="images/FR.png"
        alt=""
      />
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