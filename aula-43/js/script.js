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

Vue.component('componente1', {
    template:
    `
    <div>
        <button @click="aumentar()" class="btn btn-success mr-2">Aumentar</button>
        <button @click="diminuir()" class="btn btn-danger">Diminuir</button>
    </div>
    `,
    methods: {
        aumentar: function(){
            store.commit('incrementar');
        },
        diminuir: function(){
            store.commit('decrementar');
        }
    }
})

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

