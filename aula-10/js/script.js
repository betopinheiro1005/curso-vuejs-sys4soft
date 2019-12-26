let root = new Vue({
    el: "#root",
    data: {
        pais: '',
        imagem: '' ,
        nome_imagem: ''
    },
    methods:{
        mostrarPortugal: function(){
            this.pais = "Portugal";
            this.nome_imagem = "Bandeira de Portugal";
            this.imagem = "images/bandeira_portugal.jpg";
        },
        mostrarBrasil: function(){
            this.pais = "Brasil";
            this.nome_imagem = "Bandeira do Brasil";
            this.imagem = "images/bandeira_brasil.jpg";
        }
    }
});

root.mostrarPortugal();
