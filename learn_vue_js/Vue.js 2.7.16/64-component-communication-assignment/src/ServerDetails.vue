<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server #{{server.id}} is <strong class="text-info" :class="server.notification">{{server.status}}</strong></p>
    </div>
</template>

<script>
import {serverBus} from './main'

export default {
    data(){
        return {
            server: null
        }
    },

    created(){
        serverBus.$on('serverSelected', (server) => {
            this.server = server;
        });
    }
}
</script>