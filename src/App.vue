<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  font-family: $font-hei;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased; //大部分在苹果上
  -moz-osx-font-smoothing: grayscale; //大部分在苹果上
  font-size: 16px;
  color: #333;
}
</style>
