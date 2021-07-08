<template>
  <Layout class-prefix="layout">
    <!-- {{ recordList }} -->
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
// 在ts中引用js,使用require导入进来，如果是export default 则后面写.default,如果不是则直接析构如下面
// const { model } = require("@/model.js");
// const model = require("@/model.js").default;
// const recordList: Record[] = model.fetch();

// import model from "@/model";
// const recordList = model.fetch();
import recordListModel from "@/models/recordListModel";
const recordList = recordListModel.fetch();

import tagListModel from "@/models/tagListModel";
const tagList = tagListModel.fetch();

// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number; //数据类型 object | string
//   createdAt?: Date; //类 /构造函数----> ?代表可以不存在
// };

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  // onUpdateType(value:string){
  //   this.record.type=value
  // }
  //   onUpdateAmount(value: string) {
  //     this.record.amount = parseFloat(value);
  //   }
  saveRecord() {
    //进行深拷贝
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    // window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
