<template>
    <div id="Calculadora_personal">

    <div class="container card pt-2 mb-5 primario" style="max-width: 1000px">

      <!-- LEGENDA -->
      <div class="m-3">
        <strong style="font-size: 5vh; text-shadow: 1px 1px 2px mediumseagreen;"> CALCULA TU HUELLA DE CARBONO PERSONAL  </strong>
      </div>

      <!-- CONTENEDOR 1 -->
      <div class="container contenedor card p-5 mb-5">
        <!-- Header -->
        <div class="row">
          <div class="col" aling="center" >
            <strong class="titulo">VIVIENDA</strong>
          </div>
        </div>
        <hr style="width: 300px; margin-left: auto; margin-right: auto;"/>
        <div class="row m-2">
          <div class="col-6" style="">
            <span class="">Cantidad de habitantes: </span>
          </div>
          <div class="col-3">
            <input type="number" class="form-control" style="text-align: center;">
          </div>
        </div>

        <!-- Form - Lamparas -->
        <div class="row m-2" id="lamparas">
          <div class="row">
            <div class="col-3">
              <strong class="subtitulos">LAMPARAS</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">CANTIDAD</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">HORAS DE USO (DIA)</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">FRECUENCIA SEMANAL</strong>
            </div>
          </div>

          <!-- Se agregarán filas para añadir lamparas -->

          <div class="row p-2" id="btns-lampara">
            <div class="col-6">
              <button type="button" class="btn btn-success" @click="setLampara">
                Agregar
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger" @click="removeLampara">
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <hr style="width: 500px; margin-left: auto; margin-right: auto;"/>


        <!-- Form - Artefactos Electricos -->
        <div class="row m-2" id="aElectricos">
          <div class="row">
            <div class="col-3">
              <strong class="subtitulos">ARTEFACTOS ELECTRICOS</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">CANTIDAD</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">HORAS DE USO (DIA)</strong>
            </div>
            <div class="col-3">
              <strong class="subtitulos">FRECUENCIA SEMANAL</strong>
            </div>
          </div>

          <!-- Se agregarán filas para añadir artefactos electricos -->
          <div class="row p-2" id="artefacto" hidden>
            <div class="col-3">
              <select class="form-select" >
                <option selected hidden>  Tipo artefacto </option>
                <option :value=artefacto v-for="artefacto in vivienda.aElectricos.opciones" v-bind:key=artefacto >{{artefacto}}</option>
              </select>
            </div>

            <div class="col-3" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>

            <div class="col-3" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>

            <div class="col-3" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>
          </div>

          <div class="row p-2" id="btns-artefacto">
            <div class="col-6">
              <button type="button" class="btn btn-success" @click="setArtefacto">
                Agregar
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger" @click="removeArtefacto">
                Eliminar
              </button>
            </div>
          </div>
        </div>

      </div>
      
      <!-- CONTENEDOR 2 -->
      <div class="container contenedor card p-5 mb-5">
        <!-- Header -->
        <div class="row">
          <div class="col" aling="center" >
            <strong class="titulo">TRANSPORTES</strong>
          </div>
        </div>
        <hr style="width: 300px; margin-left: auto; margin-right: auto;"/>

        <!-- Form - Transporte -->
        <div class="row m-2" id="transportes">
          <div class="row">
            <div class="col-4">
              <strong class="subtitulos">TRANSPORTE</strong>
            </div>
            <div class="col-4">
              <strong class="subtitulos">KM/DIA</strong>
            </div>
            <div class="col-4">
              <strong class="subtitulos">FRECUENCIA SEMANAL</strong>
            </div>
          </div>

          <!-- Se agregarán filas para añadir transportes -->
          <div class="row p-2" id="transporte" hidden>
            <div class="col-4">
              <select class="form-select" >
                <option selected hidden>  Tipo transporte </option>
                <option :value=transporte v-for="transporte in transporte.medios.opciones" v-bind:key=transporte >{{transporte}}</option>
              </select>
            </div>

            <div class="col-4" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>

            <div class="col-4" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>

          </div>

          <div class="row p-2" id="btns-transporte">
            <div class="col-6">
              <button type="button" class="btn btn-success" @click="setTransporte">
                Agregar
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger" @click="removeTransporte">
                Eliminar
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- CONTENEDOR 3 -->
      <div class="container contenedor card p-5 mb-5">
        <!-- Header -->
        <div class="row">
          <div class="col" aling="center">
            <strong class="titulo">ALIMENTOS</strong>
          </div>
        </div>
        <hr style="width: 300px; margin-left: auto; margin-right: auto;" />

        <!-- Form - Alimentos -->
        <div class="row m-2" id="alimentos">
          <div class="row">
            <div class="col-6">
              <strong class="subtitulos">ALIMENTO</strong>
            </div>
            <div class="col-6">
              <strong class="subtitulos">PORCION SEMANAL</strong>
            </div>
          </div>

          <!-- Se agregarán filas para añadir alimentos -->
          <div class="row p-2" id="alimento" hidden>
            <div class="col-6">
              <select class="form-select" >
                <option selected hidden>  Tipo alimento </option>
                <option :value=alimento v-for="alimento in alimentacion.alimentos.opciones" v-bind:key=alimento >{{alimento}}</option>
              </select>
            </div>

            <div class="col-6" align="center">
              <input type="number" class="form-control i-cantidad" />
            </div>

          </div>

          <div class="row p-2" id="btns-alimento">
            <div class="col-6">
              <button type="button" class="btn btn-success" @click="setAlimento">
                Agregar
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger" @click="removeAlimento">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-dark mb-5"> CALCULAR </button>
    </div>
  </div>

</template>


<script>
export default {
  name: 'Calculadora1',
  data() {
    return {
      vivienda: {
        lamparas: {
          cantidad: 0,
          opciones: [
            'Incandescente',
            'Led',
            'Tubo fluorescente'
          ]
        },
        aElectricos: {
          cantidad: 0,
          opciones: [
            'Computador',
            'Radio',
            'Impresora multifuncional',
            'Impresora',
            'Microondas',
            'Lavadora semiautomatica',
            'Lavadora automatica',
            'Nevera',
            'Secador de pelo',
            'Televisor',
            'Ventilador',
            'Aire acondicionado',
            'Estufa a gas'
          ]
        },
      },
      transporte: {
        medios: {
          cantidad: 0,
          opciones: [
            'Caminando',
            'Bicicleta',
            'Motocicleta',
            'Auto GNC (a gas)',
            'Auto Nafta (Gasolina)',
            'Auto diesel',
            'Camioneta Nafta',
            'Camioneta diesel',
            'Colectivo'
          ]
        },
      },
      alimentacion: {
        alimentos: {
          cantidad: 0,
          opciones: [
            'Manzana',
            'Tomate',
            'Papa',
            'Huevos',
            'Pollo',
            'Carne vacuna',
            'Leche',
            'Queso',
            'Pan',
          ]
        },
      },
    };
  },
  methods: {
    setLampara() {
      /* Aumentamos 1 en cantidad de lamparas */
      const { lamparas } = this.vivienda;
      lamparas.cantidad = lamparas.cantidad + 1;

      /* Inicializando una fila para lamparas */
      const rowLampara = document.createElement("div");
      rowLampara.innerHTML = `<div class="row p-2" id="lampara">
          <div class="col-3">
            <select class="form-select" aria-label="Default select example">
              <option selected hidden>Tipo de lampara</option>
              <option value="Incandescente">Incandescente</option>
              <option value="Led">Led</option>
              <option value="Tubo fluorescente">Tubo fluorescente</option>
            </select>
          </div>

          <div class="col-3" align="center">
            <input type="number" class="form-control i-cantidad" />
          </div>

          <div class="col-3" align="center">
            <input type="number" class="form-control i-cantidad" />
          </div>

          <div class="col-3" align="center">
            <input type="number" class="form-control i-cantidad" />
          </div>
        </div>`;

      rowLampara.setAttribute("name", "lampara" + lamparas.cantidad);

      /* Apuntando al contenedor donde se va a insertar la nueva fila */
      const contenedor = document.querySelector("#lamparas");

      /* Insertando la fila */
      contenedor.insertBefore(rowLampara, document.getElementById("btns-lampara"));
    },
    removeLampara() {
      /* Obtenemos el objeto lamparas que se encuentra en el objeto vivienda */
      const { lamparas } = this.vivienda;

      /* Se podrá eliminar un elemento siempre y cuando cantidad sea mayor que 0, es decir, siempre y cuando exista un elemento */
      if (lamparas.cantidad > 0) {
        /* Apunto al ultimo elemento que se insertó */
        const element = document.getElementsByName(
          "lampara" + lamparas.cantidad
        )[0];

        /* Apunto al contenedor */
        const contenedor = document.querySelector("#lamparas");

        /* Elimino el elemento que está contenido en "contenedor" */
        contenedor.removeChild(element);

        /* Como se eliminó un elemento, la cantidad disminuye en 1 */
        lamparas.cantidad = lamparas.cantidad - 1;
      }
    },
    setArtefacto() {
      /* Aumentamos 1 en cantidad de artefacto */
      const { aElectricos } = this.vivienda;
      aElectricos.cantidad = aElectricos.cantidad + 1;

      /* Inicializando una fila para artefactos  */
      const rowArtefacto = document.getElementById('artefacto').cloneNode(true);
      rowArtefacto.hidden = false;

      rowArtefacto.setAttribute("name", "artefacto" + aElectricos.cantidad);

      /* Apuntando al contenedor donde se va a insertar la nueva fila */
      const contenedor = document.querySelector("#aElectricos");

      /* Insertando la fila */
      contenedor.insertBefore(rowArtefacto, document.getElementById("btns-artefacto"));
    },
    removeArtefacto() {
      /* Obtenemos el objeto aElectricos que se encuentra en el objeto vivienda */
      const { aElectricos } = this.vivienda;

      /* Se podrá eliminar un elemento siempre y cuando cantidad sea mayor que 0, es decir, siempre y cuando exista un elemento */
      if (aElectricos.cantidad > 0) {
        /* Apunto al ultimo elemento que se insertó */
        const element = document.getElementsByName(
          "artefacto" + aElectricos.cantidad
        )[0];

        /* Apunto al contenedor */
        const contenedor = document.querySelector("#aElectricos");

        /* Elimino el elemento que está contenido en "contenedor" */
        contenedor.removeChild(element);

        /* Como se eliminó un elemento, la cantidad disminuye en 1 */
        aElectricos.cantidad = aElectricos.cantidad - 1;
      }
    },
    setTransporte() {
      /* Aumentamos 1 en cantidad de transporte */
      const { medios } = this.transporte;
      medios.cantidad = medios.cantidad + 1;

      /* Inicializando una fila para artefactos  */
      const rowTransporte = document.getElementById('transporte').cloneNode(true);
      rowTransporte.hidden = false;

      rowTransporte.setAttribute("name", "transporte" + medios.cantidad);

      /* Apuntando al contenedor donde se va a insertar la nueva fila */
      const contenedor = document.querySelector("#transportes");

      /* Insertando la fila */
      contenedor.insertBefore(rowTransporte, document.getElementById("btns-transporte"));
    },
    removeTransporte() {
      /* Obtenemos el objeto medios que se encuentra en el objeto transporte */
      const { medios } = this.transporte;

      /* Se podrá eliminar un elemento siempre y cuando cantidad sea mayor que 0, es decir, siempre y cuando exista un elemento */
      if (medios.cantidad > 0) {
        /* Apunto al ultimo elemento que se insertó */
        const element = document.getElementsByName(
          "transporte" + medios.cantidad
        )[0];

        /* Apunto al contenedor */
        const contenedor = document.querySelector("#transportes");

        /* Elimino el elemento que está contenido en "contenedor" */
        contenedor.removeChild(element);

        /* Como se eliminó un elemento, la cantidad disminuye en 1 */
        medios.cantidad = medios.cantidad - 1;
      }
    },
    setAlimento() {
      /* Aumentamos 1 en cantidad de alimentos */
      const { alimentos } = this.alimentacion;
      alimentos.cantidad = alimentos.cantidad + 1;

      /* Inicializando una fila para artefactos  */
      const rowAlimento = document.getElementById('alimento').cloneNode(true);
      rowAlimento.hidden = false;

      rowAlimento.setAttribute("name", "alimento" + alimentos.cantidad);

      /* Apuntando al contenedor donde se va a insertar la nueva fila */
      const contenedor = document.querySelector("#alimentos");

      /* Insertando la fila */
      contenedor.insertBefore(rowAlimento, document.getElementById("btns-alimento"));
    },
    removeAlimento() {
      /* Obtenemos el objeto alimentos que se encuentra en el objeto alimentacion */
      const { alimentos } = this.alimentacion;

      /* Se podrá eliminar un elemento siempre y cuando cantidad sea mayor que 0, es decir, siempre y cuando exista un elemento */
      if (alimentos.cantidad > 0) {
        /* Apunto al ultimo elemento que se insertó */
        const element = document.getElementsByName(
          "alimento" + alimentos.cantidad
        )[0];

        /* Apunto al contenedor */
        const contenedor = document.querySelector("#alimentos");

        /* Elimino el elemento que está contenido en "contenedor" */
        contenedor.removeChild(element);

        /* Como se eliminó un elemento, la cantidad disminuye en 1 */
        alimentos.cantidad = alimentos.cantidad - 1;
      }
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.contenedor {
  max-width: 800px;
}

.i-cantidad {
  max-width: 100px;
  text-align: center;
}

.titulo {
  font-size: 3vh;
}

.subtitulos {
  font-size: 13px;
}

.primario {
  background-color: rgba(47, 221, 31, 0.137);
}
</style>
