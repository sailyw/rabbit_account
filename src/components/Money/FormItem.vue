<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <!-- <input type="text" :value="value" @input="onInput" placeholder="在这里输入备注" /> -->
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) readonly value!: string; //！代表不用检查是否存在

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string; //?表示有可能不存在
  //   @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
  // onInput(event: KeyboardEvent){
  //   // $event.target.value
  //   const input = event.target as HTMLInputElement;
  //   this.value = input.value
  // }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
