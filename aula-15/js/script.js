let root = new Vue({
    el: "#root",
    data: {
        nome: 'João',
        sobrenome: 'Ribeiro'
    },
    methods: {
        nomeCompletoM: function(){
            return this.nome + " " + this.sobrenome;
        }
     },
     computed: {
         nomeCompletoC: function(){
            return this.nome + " " + this.sobrenome;
         }
     }
});

