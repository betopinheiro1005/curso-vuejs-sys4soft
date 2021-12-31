let root = new Vue({
    el: "#root",
    data: {
        frutas: [],
        novaFruta: ' ',
        totalFrutas: 0
    },
    methods: {
        inserirFruta: function(){
            this.frutas.push(this.novaFruta);
            this.novaFruta = ' ';
            this.totalFrutas = this.frutas.length;
        }
    }
});
