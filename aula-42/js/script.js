// -----------------------------------------------------
// VUEX

const store = new Vuex.Store({
    state: {
        valor: 0
    },
    mutations: {
        incrementar(state){
            state.valor++;
        },
        decrementar(state){
            state.valor--;
        }
    }
});

// -----------------------------------------------------

new Vue({
    el: "#app",
    computed:{
        valor: function(){
            return store.state.valor;
        }
    },
    methods: {
        aumentar: function(){
            store.commit('incrementar');
        },
        diminuir: function(){
            store.commit('decrementar');
        }
    }
});

