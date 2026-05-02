<template>
    <div class="mb-3">
        <h6>Quotes Added</h6>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount/maxQuotes)*100+'%'}">
                {{quoteCount}} / {{maxQuotes}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
props: ['quoteCount', 'maxQuotes']
}
</script>