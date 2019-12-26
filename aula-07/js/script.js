const root = new Vue({
    el: "#root",
    data: {
        visivel: true
    },
    methods: {
        mostrarEsconder: function(){
            this.visivel = !this.visivel;
            console.log(this.visivel);
        },
        mostrarMensagem: function(){
            if(document.getElementById("mensagem").innerHTML == ""){
                document.getElementById("mensagem").innerHTML = "<h3>Seja bem-vindo!</h3>";
            } else {
                document.getElementById("mensagem").innerHTML = "";
            }
            
        }
    }
});
