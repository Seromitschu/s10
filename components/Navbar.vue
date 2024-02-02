<template>
  <div>
    <PhHorse />
    <PhHeart :size="32" color="hotpink" weight="fill" />
    <PhCube />
  </div>
</template>

<script>
  import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
  export default {
    name: "App",
    components: {
      PhHorse,
      PhHeart,
      PhCube,
    },
  };
</script>
