<template>
  <header class="header">
    <div class="c-inner">
      <h1 class="header-title">
        新規会員登録 |
        フリーランスエンジニア向けIT求人・案件サイト【フリーランススタート】
      </h1>
      <div class="header-inner">
        <div class="header-logo">
          <nuxt-link to="/">
            <img
              src="@/assets/img/site-logo.png"
              alt="logo"
              class="rocket_icon"
            />
          </nuxt-link>
        </div>
        <nav class="header-nav">
          <ul>
            <li>
              <nuxt-link to="">案件を探す</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/users/login">ログイン</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>



<style lang='scss' scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #dee2e6;
  position: fixed;
  top:0;
  width:100%;
  z-index: 1;
  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-title {
    margin-block-start: 10px;
    font-size: 10px;
    font-weight: 400;
  }
  &-nav {
    ul {
      display: flex;
      align-items: center;
      li {
        a {
          display: inline-block;
          font-size: 14px;
          padding: 27px 15px;
          color: #333;
          font-weight: bold;
          margin-bottom: 2px;
          &:hover {
            border-bottom: 2px solid #333;
            margin-bottom: 0px;
          }
        }
      }
    }
  }
}
.rocket_icon {
  width: 32px;
  height: 32px;
}
</style>