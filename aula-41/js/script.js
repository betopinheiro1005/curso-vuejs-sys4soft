// -----------------------------------------------------
// VUEX

const store = new Vuex.Store({
    state: {
        nome: 'João',
        sobrenome: 'Ribeiro'
    }
});

// -----------------------------------------------------


new Vue({
    el: "#app",
    computed: {
        meunome: function(){
            return store.state.nome;
        },
        meusobrenome: function(){
            return store.state.sobrenome;
        }
    }
});

