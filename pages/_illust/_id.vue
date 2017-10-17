<template>
    <div class="page-illust">
        <div class="back">
            <div class="container center">
                <p class="site-navi">
                    <router-link to="/">トップページ</router-link><span class="arrow">></span>
                    <router-link to="/female_std">{{illust.title}}</router-link><span class="arrow">></span>
                    <a>{{subIllust.title}}</a></p>
                <div class="thumbnail"><img src="/img/female_std/01.png" alt="悩む女性のイラスト"/></div>
                <div class="feature">
                    <div class="feature-text">
                        <h3>{{subIllust.title}}</h3>
                        <p v-for="line in illust.summary">{{line}}</p>
                    </div>
                    <div class="downloader"><a :href="illust.download" :download="illust.zipname">
                        <button>画像をダウンロード</button></a>
                        <p>画像をクリックすると個別にダウンロードすることができます。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="back-to-top">
                <router-link :to="'/'+name"><button>一覧に戻る</button></router-link>
                <router-link to="/"><button>トップに戻る</button></router-link></div>
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
      name () {
        return this.$route.params.illust
      },
      illust () {
        return this.$store.getters.illustByName(this.name)
      },
      subIllust () {
        return this.illust.imgset[this.$route.params.id]
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
