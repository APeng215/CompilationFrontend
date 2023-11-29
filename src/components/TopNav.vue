<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopNav"
})
</script>

<template>
  <el-menu
      id="main_menu"
      default-active="/lexicalAnalysis"
      class="el-menu-demo"
      mode="horizontal"
      router="true"
  >
    <ion-icon id="icon" name="hardware-chip-outline"></ion-icon>
    <el-menu-item index="/lexicalAnalysis">词法分析器</el-menu-item>
    <el-menu-item index="/llAnalysis">LL(1)语法分析器</el-menu-item>
    <el-menu-item index="/operatorFirstAnalysis">算符优先语法分析器</el-menu-item>
    <el-menu-item index="/lrAnalysis">LR(0)语法分析器</el-menu-item>
  </el-menu>
</template>

<style scoped>
#icon {
  font-size: 32px;
  margin: auto 12px;
}
</style>