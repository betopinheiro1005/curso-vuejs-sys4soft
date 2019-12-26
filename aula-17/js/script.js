Vue.component('pai', {
    template: `
        <div>
            <p>Este é o texto do componente pai</p>
            <filho></filho>
        </div>
        `
})

Vue.component('filho', {
    template: `
        <div>
            <p>Este é o texto do componente filho</p>
        </div>
        `
})

let root = new Vue({
    el: "#root",
    component: [
        'pai',
        'filho'
    ]
});

