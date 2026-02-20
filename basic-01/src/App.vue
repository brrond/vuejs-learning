<script setup lang="ts">

const name = "Danya";
const age = 23;

function getImageUrl() {
  return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fthe-most-random-image-every-seen-in-the-history-of-the-v0-iuzrc59aw2sb1.jpg%3Fwidth%3D1024%26format%3Dpjpg%26auto%3Dwebp%26s%3Ddd018a25303363415b10f1906c2d4b25fa47043f&f=1&nofb=1&ipt=eea075ba0922d8fbd4c8ad78e82ce90e8e5227455ab8eb35331083aba6a3c5a9";
}
</script>

<template>
  <section id="assignment">
    <h2>{{ name }}</h2>
    <p>{{ age }}</p>
    <p>{{ age + 5}}</p>
    <p>Favorite Number: {{Math.random()}}</p>
    <div>
      <img :src="getImageUrl()" />
    </div>
    <input type="text" :value="name"/>
  </section>
</template>

<style scoped></style>
