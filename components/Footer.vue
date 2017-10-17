<template>
  <footer id="footer">
    <div class="footer_texture"></div>
    <div class="container">
      <div class="btn_pageTop" id="btn_pageTop"><img src="/img/icon_circle.svg"/><img class="btn_pageTop_icon" src="/img/icon_arrowUp-white.svg"/></div>
      <nav>
        <ul class="footer_nav">
          <li class="footer_navLink">
            <router-link to="/">
              <div class="footer_navLink--home"><span>TOPページ</span></div>
            </router-link>
          </li>
          <li class="footer_navLink">
            <router-link to="/info">
              <div class="footer_navLink--concept"><span>コンセプト</span></div>
            </router-link>
          </li>
          <li class="footer_navLink">
            <router-link to="/info">
              <div class="footer_navLink--creator"><span>運営について</span></div>
            </router-link>
          </li>
          <li class="footer_navLink">
            <router-link to="/info">
              <div class="footer_navLink--request"><span>リクエスト</span></div>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="footer_copyright"><span class="powered_by">Powered by</span><a href="https://chatbox-inc.com/" target="_blank"><img src="/img/logo_chatbox.svg"/></a><span class="right_reserved">All rights reserved.</span></div>
    </div>
  </footer>
</template>

<style>
</style>
