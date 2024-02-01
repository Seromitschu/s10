<template>
    <div class="navbar padding mt-9">
    <p class="border-red-500 border-b-2 border-opacity-100 hover:border-opacity-70 navbarBtn thinText display-inline-block mr-5"><a href="/"><uil-vuejs size="180px" class="logo"/> Home</a></p>
    <p class="border-green-500 border-b-2 border-opacity-100 hover:border-opacity-70 navbarBtn thinText display-inline-block mr-5"><a href="/about">About</a></p>
    <p class="border-blue-500 border-b-2 border-opacity-100 hover:border-opacity-70 navbarBtn thinText display-inline-block mr-5"><a href="/contact">Contact</a></p>
    <p class="border-yellow-500 border-b-2 border-opacity-100 hover:border-opacity-70 navbarBtn thinText display-inline-block"><a href="/activities">Activities</a></p>
    </div>
</template>

<script>
import { UilVuejs } from '@iconscout/vue-unicons'

export default {
  components: {
    UilVuejs
  }
}
</script>
