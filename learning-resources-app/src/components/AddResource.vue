<script lang="ts" setup>
import { ref } from "vue";
import BaseCard from "./base/BaseCard.vue";
import { Resource } from "@/Resource";

const title = ref("");
const description = ref("");
const link = ref("");

const emit = defineEmits(["add-resource"]);

function addItem() {
    emit(
        "add-resource",
        new Resource(0, title.value, description.value, link.value),
    );

    title.value = "";
    description.value = "";
    link.value = "";
}
</script>

<template>
    <BaseCard>
        <div>
            <div class="input-div">Title: <input type="text" v-model="title" /></div>
            <div class="input-div">
                <textarea type="text" v-model="description" />
            </div>
            <div class="input-div">Link: <input type="text" v-model="link" /></div>
            <button @click="addItem">Add Item</button>
        </div>
    </BaseCard>
</template>

<style lang="css" scoped>
div {
    text-align: center;
}

.input-div,
button {
    margin: 1%;
}

textarea {
    width: 20%;
    height: 100px;
}
</style>
