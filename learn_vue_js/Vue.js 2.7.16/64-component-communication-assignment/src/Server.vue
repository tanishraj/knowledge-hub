<template>
    <div>
        <li class="list-group-item" style="cursor: pointer;" @click="serverSelect">
            Server #{{server.id}}
        </li>
    </div>
</template>

<script>
import {serverBus} from './main'

export default {
    props: ['server'],

    methods: {
        serverSelect(){
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>