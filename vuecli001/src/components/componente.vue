<template>
    <div>
        <p>(Componente.vue) Nome = {{meunome}} </p>
        <button class="btn btn-success" @click="alterar">Alterar</button>
    </div>
</template>

<script>
export default {
    props: [
        'meunome'
    ],
    methods:{
        alterar(){
            this.meunome = 'Joaquim';
            this.$emit('nomeAlterado', this.meunome);
        }
    }
}
</script>

