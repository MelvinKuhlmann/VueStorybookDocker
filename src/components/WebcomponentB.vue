<template>
    <div>
        <h1>This is webcomponent B with message {{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'WebcomponentB',
        props: {
            msg: String
        }
    }
</script>
