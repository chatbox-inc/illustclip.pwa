<template>
  <div id="pageTop">
    <div class="container">
      <ul class="pageTop_illustLists">
        <li class="pageTop_illustLists_illust" v-for="(illust,key) in illustList">
          <router-link class="card" :to="'/'+key">
          <div class="thumbnail"><img :src="illust.hero"/></div>
          <h3>{{illust.title}}</h3>
          <p>{{illust.brief}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch ({ store, params }) {
      await store.dispatch('fetchIllust')
    },
    data () {
      return {
        online: true
      }
    },
    computed: {
      illustList () {
        return this.$store.state.illust
      }
    },
    mounted () {
      console.log('hoge')
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>

</style>
