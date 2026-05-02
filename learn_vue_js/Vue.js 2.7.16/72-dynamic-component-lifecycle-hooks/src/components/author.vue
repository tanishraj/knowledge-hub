<template>
    <div>
        <div class="card">
            <div class="card-body">
                <!-- whenever the component is loaded into the dom, it will be loaded dynamically. -->
                <h3>Author</h3>
                <p>I am author of this quote.</p>
                <button class="btn btn-info" @click="counter++">Increase! ({{counter}})</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            counter: 0
        }
    },
    destroyed() {
        console.log("Author component destroyed.");
    },
}
</script>