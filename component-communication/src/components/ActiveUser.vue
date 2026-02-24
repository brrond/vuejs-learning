<script lang="ts" setup>
defineProps({
    username: { type: String, required: true, default: "Nothing" },
    age: { type: Number, required: true, default: 1 },
})
</script>

<template>
    <div>
        <h1>User Data</h1>
        <div class="inner-box">
            <h2>{{ username }}</h2>
            <h3>{{ age }}</h3>
        </div>
    </div>
</template>

<style scoped>
div {
    border: dashed red 3px;
    padding: 5px;
    vertical-align: middle;
    text-align: center;
}

.inner-box {
    margin-left: 40%;
    width: 20%;
    border: solid blue 1px;
    padding: 2px;
}
</style>
