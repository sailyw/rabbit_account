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
  //@Prop是个装饰器，告诉Vue xxx不是data 是prop
  //Number为告诉Vue xxx 是个 Number-运行时
  //xxx 属性名
  //number | undefined就是告诉TS xxx的类型-编译时
  //如果不想写undefined 可以直接给个初始值 @Prop(Number) xxx=0;
  @Prop(Number) xxx: number | undefined;
  
  //对应声明data
  type='-'; //'-'表示支出，+表示收入
  // 声明生命周期
  mounted() {
    console.log(this.xxx);
    if(this.xxx===undefined){
      console.log("undefined");
    }else{
      console.log(this.xxx.toString());
    }
  }
  selectType(type: string) {
      //type只能是+和-中的一个
      //如果type既不是-也不是+，则抛出一个错误
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.type = type;
  }
}
// export default {
//   name: "Types",
//   props: ["xxx"],//外部属性
//   data() {
//     return {
//       type: "-", //'-'表示支出，+表示收入
//     };
//   },
//   mounted() {
//     console.log(this.xxx);
//   },
//   methods: {
//     selectType(type) {
//       //type只能是+和-中的一个
//       //如果type既不是-也不是+，则抛出一个错误
//       if (type !== "-" && type !== "+") {
//         throw new Error("type is unknown");
//       }
//       this.type = type;
//     },
//   },
// };
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
