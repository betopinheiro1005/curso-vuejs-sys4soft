let root = new Vue({
    el: "#root",
    
    data: {
        nome: ''
    },
    
    methods: {
        click: function(){
            this.nome = 'João';
        },
        destruir: function(){
            root.$destroy();
        }
    },

    created: function(){
        console.log('Criada');
    },

    mounted: function(){
        console.log('Montada');
    },

    updated: function(){
        console.log('Atualizada');
    },

    destroyed: function(){
        console.log('Destruída');
    }


});

