<template>
  <Layout class-prefix="layout">
    <!-- {{ recordList }} -->
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        @update:value="onUpdateNotes"
        fieldName="备注"
        placeholder="在这里输入备注"
      />
    </div>

    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
// 在ts中引用js,使用require导入进来，如果是export default 则后面写.default,如果不是则直接析构如下面
// const { model } = require("@/model.js");
// const model = require("@/model.js").default;
// const recordList: Record[] = model.fetch();

// import model from "@/model";
// const recordList = model.fetch();

// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number; //数据类型 object | string
//   createdAt?: Date; //类 /构造函数----> ?代表可以不存在
// };

@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
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
    // const record2: RecordItem = recordListModel.clone(this.record);
    // record2.createdAt = new Date();
    // this.recordList.push(record2);
    window.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
