<template>
    
    <div>
    <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>I'm the first tab</p><div class='container'>
        <h1>Bienvenido a nuestro portal</h1>
        <b-button @click="cerrarSesion()" variant="outline-secondary">cerrarSesion</b-button>
    </div></b-tab>
        <b-tab title="Calculadora personal"><p>I'm the second tab</p>


        <Calculadora1 />
        
        
        </b-tab>
        <b-tab title="Calculadora institucional" ><p>I'm a disabled tab!</p>
        <Calculadora2 />
        </b-tab>
    </b-tabs>
    </div>



</template>

<script>
import Calculadora1 from '@/components/Calculadora1.vue'
import Calculadora2 from '@/components/Calculadora2.vue'
export default{
    name: 'Menu',
    beforeCreate(){
        
        var autentication = window.localStorage.getItem('autentication');
        console.log('autenticacion esta ' + autentication);
        if (autentication !== 'ok') {
            this.$router.push({path: '/Login'});
            
        }
    },
    methods:{
        cerrarSesion(){
            window.localStorage.removeItem('autentication');
            this.$router.push({path: '/Login'});
        }
    },

    components: {
    Calculadora1,
    Calculadora2
  }

}
</script>

