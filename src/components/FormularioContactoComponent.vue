<template>
  <div class="container">
    <form @submit.prevent="guardar()">
      <div class="row">
        <div class="form-group col-md-6">
          <label>Nombre</label>
          <input
            v-model="contato.nombre"
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group col-md-6">
          <label>Apellido</label>
          <input
            v-model="contato.apellido"
            type="text"
            class="form-control"
            id="apellido"
            placeholder="Apellido"
          />
        </div>
        <div class="form-group col-md-6">
          <label>Telefono</label>
          <input
            v-model="contato.telefono"
            type="text"
            class="form-control"
            id="telefono"
            placeholder="Telefono"
          />
        </div>
        <div class="form-group col-md-6">
          <label>Celular</label>
          <input
            v-model="contato.celular"
            type="text"
            class="form-control"
            id="celular"
            placeholder="Celular"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputEmail4">Email</label>
          <input
            v-model="contato.correo"
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>   
      </div>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary" v-if="!codigo">Guardar</button>
      <button type="submit" class="btn btn-primary" v-else>Editar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FormularioContactoComponent extends Vue {

  public codigo;
  private lista:any[]

  public contato = {
    codigo: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    celular: '',
    correo: '',
  }

  mounted(){
    this.codigo = this['$route'].params.codigo;
    this.lista = JSON.parse(localStorage.getItem('contattoList'));

    if(this.codigo) this.getContacto()
  }

  getContacto(){
    this.contato = this.lista.find( data => data.codigo === this.codigo)
  }

  guardar(){
    

    if(this.codigo){
      this.lista.map( data => {
        if(data.codigo === this.codigo){
          return this.contato;
        }
      });
    }else{
      this.contato.codigo = this.lista.length + 1;
      this.lista.push(this.contato)
      this.contato.codigo = this.lista.length + 1;
      this.lista.push(this.contato);
    }

    localStorage.setItem( 'contattoList', JSON.stringify(this.lista))
    
  }
}
</script>

<style scoped>
  
</style>