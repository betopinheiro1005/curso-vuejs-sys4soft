<template>
    <div>
        <p>Estado do servidor: {{estado}}</p>
        <div>
            <button class="btn btn-success mr-2" @click="ligar">Ligar</button>
            <button class="btn btn-danger" @click="desligar">Desligar</button>
        </div>
    </div>
</template>

<script>
export default {
  data: function(){
    return {
      estado: 'Ligado'
    }
  },
  methods: {
      ligar(){
          this.estado = "Ligado"
      },
      desligar(){
          this.estado = "Desligado"
      }
  }
}
</script>
