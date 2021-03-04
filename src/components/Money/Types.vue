<template>
  <div>
    <ul class="types">
      <!-- &&为简写 -->
      <!-- <li :class="type === '-' ? 'selected':''" @click="selectType('-')">支出</li> -->
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component,Prop } from 'vue-property-decorator';
//装饰器
@Component
export default class Types extends Vue{
  @Prop() readonly type!: string
  //对应声明data
  // type='-'; //'-'表示支出，+表示收入
  selectType(type: string) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.$emit("update:value",type)
      // this.type = type;
  }
  // @Watch("type")
  // onTypeChanged(value:string){
  //   this.$emit("update:value",value)
  // }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>
