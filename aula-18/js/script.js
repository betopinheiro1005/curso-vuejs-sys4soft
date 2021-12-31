Vue.component('lista-nomes', {
    props: [
        'nomescomponent'
    ],
    template:
        `
        <ul>
            <li v-for="nome in nomescomponent">{{nome}}</li>
        </ul>
        `
})

let root = new Vue({
    el: "#root",
    data: {
        nomes: ['João', 'Ana', 'Carlos']
    }
});

