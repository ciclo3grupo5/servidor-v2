<template>
  
    <div class="login">
    <!-- <img alt="Vue logohuella" src="../assets/logohuella.png"> -->
    
    <HelloWorld msg="form"/>
    </div>
  
  
  
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  beforeCreate(){
        
        var autentication = window.localStorage.getItem('autentication');
        console.log('autenticacion esta ' + autentication);
        if (autentication === 'ok') {
            this.$router.push({path: '/menu'});
            
        }
    },
    data(){
    return{
      autentication:window.localStorage.getItem('autentication')

    }
      
      },

  components: {
    HelloWorld
  }
}
</script>
