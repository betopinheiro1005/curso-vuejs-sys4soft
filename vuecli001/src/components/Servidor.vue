<template>
    <div>
        <h4>Dados do Servidor</h4>
        <hr>
        <app-estado-servidor></app-estado-servidor>
        <br />
        <app-temperatura-servidor></app-temperatura-servidor>
    </div>
</template>

<script>

import EstadoServidor from "./EstadoServidor";
import TemperaturaServidor from "./TemperaturaServidor";

export default {
    components:{
        'app-estado-servidor': EstadoServidor,
        'app-temperatura-servidor': TemperaturaServidor
    }
}
</script>