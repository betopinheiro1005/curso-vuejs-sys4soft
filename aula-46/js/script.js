// -----------------------------------------------------
// VUEX

const store = new Vuex.Store({
    state: {
        valor: 0
    },
    mutations:{
        aumentar: function(state){
            state.valor++
        },
        diminuir: function(state){
            state.valor--
        }
    },
    actions: {
        aumentar: function(context){
            setTimeout(function(){
                context.commit('aumentar');
            },2000);
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
            store.dispatch('aumentar');
        },
        diminuir: function(){
            store.commit('diminuir');
        },
    }
});

