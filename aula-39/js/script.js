// -----------------------------------------------------

Vue.component('comp1', {
    template: 
        `
        <div>
            <p>Componente 1 - {{valor1}}</p>
            <p>Componente 1 - {{valor2}}</p>
            <button class="btn btn-primary m-3" @click="executar">Clicar</button>
        </div>
        
        `,
        data: function(){
            return {
                valor1: 100,
                valor2: 200
            }
        },
        methods:{
            executar: function(){
                this.valor1 = 2000,
                this.valor2 = 500
            }
        }
})

// -----------------------------------------------------

Vue.component('comp2', {
    template: 
        `
        <p>Componente 2</p>
        `
})

// -----------------------------------------------------

let app = new Vue({
    el: "#app",
    
    data: {
        nome: 'João',
        sobrenome: 'Ribeiro'
    }

});

