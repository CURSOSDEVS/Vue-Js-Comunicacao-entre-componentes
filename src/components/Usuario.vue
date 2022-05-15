<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é <strong>{{nome}}</strong></p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click='alterarNome'>Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- <UsuarioInfo 
                v-bind:nome="nome" 
                v-on:nomeMudou=" nome = $event.novo + '-' + $event.antigo"          
            /> -->
            <UsuarioInfo 
                v-bind:nome="nome" 
                v-on:nomeMudou=" nome = $event" 
                @idadeMudou=" idade = $event"
                v-bind:reiniciarFn="reiniciarNome"         
                :idade="idade"
            />
            <!-- <UsuarioEditar 
                :idade="idade"
                @idadeMudou=" idade = $event"
            /> -->
            <UsuarioEditar 
                :idade="idade"
               
            />
        </div>
    </div>
</template>

<script>
import UsuarioInfo from './UsuarioInfo'
import UsuarioEditar from './UsuarioEditar'

export default {
    components: { UsuarioInfo, UsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: '21'
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome(){
            this.nome = 'Claudisnei'
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
