<template>
  <div class="page-illustset">
    <div class="back">
      <div class="container center">
        <p class="site-navi">
          <router-link to="/">トップページ</router-link><span class="arrow">></span>
          <a>{{illust.title}}</a>
        </p>
        <div class="thumbnail"><img :src="illust.hero" :alt="illust.title"/></div>
        <div class="feature">
          <div class="feature-text">
            <h3>
              {{illust.title}}
            </h3>
            <p v-for="line in illust.summary">{{line}}</p>
          </div>
          <div class="downloader"><a :href="illust.download" :download="illust.zipname">
            <button>全てをダウンロード</button></a>
            <p>画像をクリックすると個別にダウンロードすることができます。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="illust-set">
        <div class="illust-link" v-for="subIllust in illust.imgset">
          <router-link :to="subIllust.href">
            <div class="illust"><img :src="subIllust.img" :alt="subIllust.title"/>
              <p>{{subIllust.title}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="back-to-top"><a href="/">
        <button>トップに戻る</button></a></div>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch ({ store, params }) {
      await store.dispatch('fetchIllust')
    },
    data () {
      return { }
    },
    computed: {
      illust () {
        return this.$store.getters.illustByName(this.$route.params.illust)
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
