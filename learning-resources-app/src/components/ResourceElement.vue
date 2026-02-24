<script lang="ts" setup>
import { Resource } from "@/Resource";

const props = defineProps({
    resource: { type: Resource, required: true },
});

const emit = defineEmits(["delete-resource"]);

function deleteResouce() {
    emit("delete-resource", props.resource.id);
}
</script>

<template>
    <div>
        <h2>{{ resource.title }}</h2>
        <p>{{ resource.description }}</p>
        <a :href="resource.link">Link to the resource</a>
        <hr />
        <button @click="deleteResouce">Delete resource</button>
    </div>
</template>

<style lang="css" scoped>
div {
    width: 40%;
    margin-left: 30%;
    border: solid black 2px;
    padding: 1%;
}
</style>
