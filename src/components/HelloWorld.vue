<template>
  <div class="hello">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Cel</th>
      <th scope="col">Telefono</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="contato in contactos" :key="contato.codigo">
      <th scope="row">{{contato.nombre}} {{contato.apellido}}</th>
      <td>{{contato.correo}}</td>
      <td>{{contato.celular}}</td>
      <td>{{contato.telefono}}</td>
      <td>
        <router-link :to="{ name: 'nuevo', params: {codigo: contato.codigo }}"> Editar</router-link>
        <router-link to="/#"> <div @click="eliminar(contato.codigo)"> Eliminar </div> </router-link>
        
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string; 
  public contactos:any = [];

  mounted(){
    this.getContactos();
  }
  
  getContactos(){
    const url = 'data/contactosData.json';
    const dataEstorage:[] = JSON.parse(localStorage.getItem('contattoList'));

    if(dataEstorage){
      this.contactos = dataEstorage;
      return;
    }

    axios.get(url).then( data => {
      if(data){
        this.contactos = data.data;
        localStorage.setItem( 'contattoList', JSON.stringify(this.contactos))
      }
    });
  }

  eliminar(codigo){
    this.contactos = this.contactos.filter( data => data.codigo !== codigo)
    localStorage.setItem( 'contattoList', JSON.stringify(this.contactos))
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
