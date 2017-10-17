<template>
    <header id="header">
        <div class="header_stripe"></div>
        <div class="container">
            <div class="header_logo"><a href="/"><img src="/img/logo_rectangle.svg"/></a></div>
            <nav>
                <ul class="header_nav">
                    <li class="header_navLink">
                        <router-link to="/">
                            <div class="header_navLink--home">TOPページ</div>
                        </router-link></li>
                    <li class="header_navLink">
                        <router-link to="/info">
                            <div class="header_navLink--concept">コンセプト</div>
                        </router-link>
                    </li>
                    <li class="header_navLink">
                        <router-link to="/info">
                            <div class="header_navLink--creator">運営について</div>
                        </router-link>
                    </li>
                    <li class="header_navLink">
                        <router-link to="/info">
                            <div class="header_navLink--request">リクエスト</div>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <p class="header_description">ストーリー構成に合わせて使いやすいフリーイラスト素材サイトです。個人利用・商用利用どちらも無料で仕様できます。</p>
        </div>
    </header>
</template>

<style>
</style>
