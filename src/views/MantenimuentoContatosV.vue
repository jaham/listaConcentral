<template>
  <div class="about">
    <FormularioContactoComponent></FormularioContactoComponent>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import FormularioContactoComponent from '@/components/FormularioContactoComponent.vue';

@Component({
  components: {
    FormularioContactoComponent,
  },
})
export default class MantenimuentoContatosV extends Vue {}
</script>
