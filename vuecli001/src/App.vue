<template>
    <div>
      <p>(App.vue) Nome = {{nome}}</p>
      <button class="btn btn-primary" @click="alterar">Alterar</button>
      <hr>
      <app-componente :meunome = nome @nomeAlterado="nome = $event"></app-componente>
    </div>
</template>

<script>
import componente from './components/componente'
export default {
  components: {
    'app-componente': componente
  },
  data: function(){
    return {
      nome: 'João'
    }
  },
  methods: {
    alterar(){
      this.nome='Carlos';
    }
  }

}
</script>

