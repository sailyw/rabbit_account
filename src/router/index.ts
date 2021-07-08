import Vue from "vue";
import VueRouter from "vue-router";

import Money from "@/views/Money.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import EditLabel from "@/views/EditLabel.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/money",
    },
    {//记账
        path: "/money",
        component: Money,
    },
    {//标签
        path: "/labels",
        component: Labels,
    },
    {//统计
        path: "/statistics",
        component: Statistics,
    },
    {//编辑标签
        path: "/labels/edit",
        component: EditLabel,
    },
    // 匹配所有
    {
        path: "*",
        component: NotFound,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
