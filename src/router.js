import { createRouter, createWebHistory } from "vue-router";
import LexicalAnalyzer from "~/components/LexicalAnalyzer.vue";
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/lexicalAnalysis",
            component: LexicalAnalyzer,
        },
    ],
});
