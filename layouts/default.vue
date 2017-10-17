<template>
  <div class="content-edge">
    <app-header/>
    <div id="contents">
      <nuxt/>
    </div>
    <app-footer/>
  </div>
</template>

<script>

  import AppHeader from '~/components/Header.vue'
  import AppFooter from '~/components/Footer.vue'

  export default {
    components: {
      AppHeader,
      AppFooter
    },
    created () {
    }

  }
</script>

<style>


</style>
