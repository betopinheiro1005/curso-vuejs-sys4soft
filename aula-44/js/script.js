// -----------------------------------------------------
// VUEX

const store = new Vuex.Store({
    state: {
        nome: 'João',
        sobrenome: 'Ribeiro'
    },
    getters: {
        nomeCompleto: function(state){
            return 'O meu nome é ' + state.nome + ' ' + state.sobrenome;
        }
    }
});

// -----------------------------------------------------

new Vue({
    el: "#app",
    computed:{
        nomeCompleto: function(){
            return store.getters.nomeCompleto;
        }
    }
});

