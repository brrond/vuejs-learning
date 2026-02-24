<script lang="ts" setup>
import { Resource } from "@/Resource";
import ResourceElement from "./ResourceElement.vue";
import BaseCard from "./base/BaseCard.vue";

const props = defineProps({
    resources: { type: Array<Resource>, required: true },
});

const emit = defineEmits(["delete-resource"]);

function deleteResouce(id: number) {
    emit("delete-resource", id);
}
</script>

<template>
    <BaseCard>
        <ResourceElement v-for="resource in resources" :resource="resource" @delete-resource="deleteResouce"></ResourceElement>
    </BaseCard>
</template>
