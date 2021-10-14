<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">

      <b-form @submit.prevent="buscarusuario" v-if="show" >
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario:"
        label-for="input-1"
        description="."
        
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Debe ingresar su nombre de usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Ingrese contraseña"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Acceder</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data(){
    return{
      form:{
        username: '',
        password: ''
      },
      show: true,
      users: []
  }
  
  },
  
  props: {
    msg: String
  },
  methods:{
    buscarusuario(){
      console.log('holas');
      this.axios.get('/').then(res =>{
        
        this.users = res.data;
        this.users.forEach((value, index)=>{
          console.log(value.nombres + " " + value.contraseña);
          if(this.form.username === value.nombres){
            console.log('usuario encontrado');
            if(this.form.password === value.contraseña){
              console.log('contrasena correcta');
              window.localStorage.setItem('autentication', 'ok');
              this.$router.push({path: '/menu'});

            }
            else{
              window.localStorage.setItem('autentication', 'negada');
            }
          }
          else{
            window.localStorage.removeItem('autentication');
          }


        })
        
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
