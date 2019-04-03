export default [
    {
        path: "/home",
        title: "首页",
        params: { exitFlag: true },
        component: () => import("pages/business_pages/home/heart")
    }
];
