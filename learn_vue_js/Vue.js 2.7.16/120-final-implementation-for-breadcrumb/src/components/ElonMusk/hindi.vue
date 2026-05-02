<template>
<div>
    <h2>Hindi</h2>
	<p>Hello {{hindi}} subject</p>
    <router-view/>
</div>
</template>

<script>
export default {
    props: ['Hindi']
}
</script>
