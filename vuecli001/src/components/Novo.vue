<template>
  <div>
    <h1>Olá mundo! Meu nome é {{nome}} {{sobrenome}}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    click: function(){

    }
  },
  data: function(){
    return {
      nome: "João",
      sobrenome: "Ribeiro"
    }
  }
}
</script>