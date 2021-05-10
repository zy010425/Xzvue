import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Detail from "../views/Detail.vue";
import Products from "../views/Products.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(VueRouter);


const router =new VueRouter({
    routes:[
        { path:"/",component:Index},
        { path:"/detail",component:Detail},
        { path:"/products",component:Products},
        { path:"*",component:NotFound},
    ],
});

export default router;