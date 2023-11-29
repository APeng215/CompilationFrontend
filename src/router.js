import { createRouter, createWebHistory } from "vue-router";
import LexicalAnalyzer from "~/components/LexicalAnalyzer.vue";
import LLAnalyzer from "~/components/LLAnalyzer.vue";
import OperatorFirstAnalyzer from "~/components/OperatorFirstAnalyzer.vue";
import LRAnalyzer from "~/components/LRAnalyzer.vue";
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/lexicalAnalysis",
            component: LexicalAnalyzer,
        },
        {
            path: "/llAnalysis",
            component: LLAnalyzer
        },
        {
            path: "/operatorFirstAnalysis",
            component: OperatorFirstAnalyzer
        },
        {
            path: "/lrAnalysis",
            component: LRAnalyzer
        }
    ],
});
