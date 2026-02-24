<script lang="ts" setup>
import { ref } from 'vue';


const username = ref("Nothing")
const age = ref(1)

const emit = defineEmits(["update-user-data"])

function submit() {
    emit("update-user-data", username.value, age.value)
}
</script>

<template>
    <div>
        <h1>User Information</h1>
        <div class="inner-box">
            <form @submit.prevent="submit">
                Username: <input type="text" v-model="username">
                Age: <input type="number" v-model="age">
                <input type="submit">
            </form>
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
