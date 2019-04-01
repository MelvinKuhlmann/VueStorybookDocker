<template>
    <div>
        <h1>This is a webcomponent test with message: {{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'WebcomponentA',
        props: {
            msg: String
        }
    }
</script>
