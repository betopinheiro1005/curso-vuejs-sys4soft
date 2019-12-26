let root = new Vue({
    el: "#root",
    data: {
        visivel: true
    },
    methods: {
        executar: function() {
            this.visivel = !this.visivel;
        }
    }
});

