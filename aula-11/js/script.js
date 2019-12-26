let root = new Vue({
    el: "#root",
    data: {
        valor: '<p>Título Vue</p>'
    },
    methods: {
        t1: function(){
            this.valor = '<h1>Título Vue</h1>';
        },
        t2: function(){
            this.valor = '<h2>Título Vue</h2>';
        },
        t3: function(){
            this.valor = '<h3>Título Vue</h3>';
        },
    }
});

