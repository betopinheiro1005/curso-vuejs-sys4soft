// -----------------------------------------------------
// VUEX

const store = new Vuex.Store({
    state: {
        valor: 0
    },
    mutations:{
        aumentar: function(state, value){
            state.valor+=value
        },
        diminuir: function(state, value){
            state.valor-=value
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
            store.commit('aumentar', 10);
        },
        diminuir: function(){
            store.commit('diminuir', 5);
        },
    }
});

