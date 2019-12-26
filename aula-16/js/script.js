Vue.component('novo', {
    template: `
        <div>
            <p>Olá Mundo!</p>
            <h1>Título 1</h1>
            <h2>Título 2</h2>
            <hr />
        </div>
        `
})

let root = new Vue({
    el: "#root",
    component: [
        'novo'
    ]
});

