<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="(tag, index) in dataSource"
        :key="index"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined; //衣食住行，外部传来
  selectedTags: string[] = []; //被选中的字符串数组
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    // 如果已经有tag
    if (index >= 0) {
      // 则删除掉那一个tag
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (this.dataSource) {
      this.$emit("update:dataSource", [...this.dataSource, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  background: white;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
