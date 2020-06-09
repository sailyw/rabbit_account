<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body{
  font-family: $font-hei;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
}
</style>
