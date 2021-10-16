<template>
  
    <div class="contenido">
    <!-- <img alt="Vue logo" src="../assets/logohuella.png"> -->
    
    <Contenido msg="form"/>
    </div>
  
  
  
</template>


<script>
// @ is an alias to /src
import Contenido from '@/components/contenido.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Contenido
  }
}
</script>
