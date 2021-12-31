let root = new Vue({
    el: "#root",
    data: {
        nome: "João"
    },
    methods: {
        executar: function(){
            this.nome = "Bruno";
        }
    }
});

