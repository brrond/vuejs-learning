<script setup lang="ts">
import { computed, KeepAlive, ref } from "vue";
import BaseCard from "./components/base/BaseCard.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import { Resource } from "./Resource";
import ResourceList from "./components/ResourceList.vue";
import AddResource from "./components/AddResource.vue";

const resources = ref([
  new Resource(1, "Google", "Learn how to google!", "https://google.com"),
]);

const componentMap = {
  ResourceList,
  AddResource,
};
const componentToShow = ref("ResourceList");
const componentsProps = computed(() => {
  if (componentToShow.value === "ResourceList") {
    return { resources: resources.value };
  }
  return {};
});

const storedResourcesButtonStyle = computed(() => {
  if (componentToShow.value === "ResourceList") {
    return {
      background: "#00cccc",
    };
  } else {
    return {};
  }
});

const addResourceButtonStyle = computed(() => {
  if (componentToShow.value === "AddResource") {
    return {
      background: "#00cccc",
    };
  } else {
    return {};
  }
});

function addResource(resource: Resource) {
  resource.id = resources.value.length + 1;
  resources.value.push(resource);
}
function deleteResouce(id: number) {
  resources.value = resources.value.filter((resourc) => resourc.id !== id);
}
</script>

<template>
  <TheHeader></TheHeader>
  <BaseCard>
    <div id="buttonCard">
      <button :style="storedResourcesButtonStyle" @click="componentToShow = 'ResourceList'">
        Stored Resources
      </button>
      <button :style="addResourceButtonStyle" @click="componentToShow = 'AddResource'">
        Add Resource
      </button>
    </div>
  </BaseCard>
  <BaseCard>
    <KeepAlive>
      <component :is="componentMap[componentToShow]" v-bind="componentsProps" @add-resource="addResource"
        @delete-resource="deleteResouce"></component>
    </KeepAlive>
  </BaseCard>
</template>

<style scoped>
#buttonCard {
  text-align: center;
}

#buttonCard>button {
  margin: 1%;
  padding: 1%;
  background-color: none;
  border: none;
}
</style>
