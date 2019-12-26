// -----------------------------------------------------

Vue.component('comp1', {
    template: 
        `
        <div>
            <p>Valor dentro do componente 1: {{valor}}</p>
        </div>
        
        `,
        data: function(){
            return {
                valor: 1000
            }
        },
        props: [
            'valor'
        ]
})

// -----------------------------------------------------


new Vue({
    el: "#app",
    data: {
        valor: 20000
    },
    methods: {
        alterar: function(){
            this.valor += 500;
            console.log(this.valor);
        }
    }

});

