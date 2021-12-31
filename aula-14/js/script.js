let root = new Vue({
    el: "#root",
    data: {
        novoNome: '',
        nomes: []
    },
    methods: {
        adicionar: function(){
            this.nomes.push(this.novoNome);
            this.novoNome = ' ';
        }
     },
    filters: {
        capitalizar: function(value){
            return value.toUpperCase();
        }
     }
});

