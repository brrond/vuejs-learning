<script lang="ts" setup>
import { ref } from "vue";
import "./../assets/form.css"

var name = ref("")
var phoneNumber = ref("")
var email = ref("")

const emit = defineEmits(["add-new-friend"])

function submit() {
    emit("add-new-friend", name.value, phoneNumber.value, email.value)
}
</script>

<template>
    <ul>
        <li>
            <form @submit.prevent="submit">
                Name: <input type="text" v-model="name" />
                <br>
                Email: <input type="text" v-model="email" />
                <br>
                Phone: <input type="text" v-model="phoneNumber" />
                <br>
                <button type="submit">Add friend</button>
            </form>
        </li>
    </ul>
</template>
