<template>
    <div>
        <input type="text" v-model="nome">
        <p>O valor inserido é {{nome}}</p>
        <div>
            <button @click="limpar">Limpar</button>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            nome: "" 
        }
    },
    methods: {
        limpar: function(){
            this.nome = "";
        }
    }
}
</script>

<style>

</style>