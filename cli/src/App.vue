<template>
  <div id="app">
    
      <div class="logo_login_registro">
        <img alt="Vue logo" src="./assets/huella180.png">
        <h1 class="Titulo">Huella de carbono</h1>
        <div>
          <b-button id="login" variant="primary" to="/Login">login</b-button>
          <b-button id="registro" variant="info" to="/menu">registro</b-button>

        </div>
        
      </div>
    
    
    <div id="nav">
      <router-link to="/">Noticias</router-link> |
      <router-link to="/integrantes">Integrantes</router-link> |
      <router-link to="/about">Recomendaciones</router-link>|
      <!-- <router-link to="/menu">Menu</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo_login_registro{
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.logo_login_registro .Titulo{
  
  align-self: center;
}
#login{
    margin-left: auto;
}
</style>
