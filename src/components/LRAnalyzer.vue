<script>
import {defineComponent} from 'vue'
import Config from "~/config";
export default defineComponent({
  name: "LRAnalyzer",
  data() {
    return {
      rowString: "",

      C: "",
      analysisTable: "",
      analysisProcess: "",
    }
  },
  methods: {
    request() {
      fetch(Config.endPointIP + "/compilation/api/lrAnalysis", {
        method: "POST",
        body: this.rowString,
        headers: {
          "Content-type": "text/plain;charset=UTF-8",
        }
      })
          .then((response) => response.json())
          .then((json) => {
            this.C = json.C;
            this.analysisTable = json.analysisTable;
            this.analysisProcess = json.analysisProcess;
            console.log(json)
          })
    }
  }
})
</script>

<template>
  <div id="whole">
    <div id="parent-left" class="allCenter shadow">
      <div class="title">
        <el-icon style="margin: auto"><Document /></el-icon>
        输入
      </div>
      <el-scrollbar class="scrollbar">
        <div id="left" class="allCenter">
          <el-input
              class="input"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder="请输入待分析文法"
              v-model="rowString"
          >
          </el-input>
        </div>
        <span>
            输入 格式要求：<br>
            第 1 行：开始符号<br>
            第 2 行：非终结符（用空格隔开）<br>
            第 3 行：终结符（用空格隔开）<br>
            余下每行：产生式（形如 F->(E)|i ）<br>
            最后一行：表达式（用 # 结尾，形如 (i+i)# ）
        </span>
      </el-scrollbar>
    </div>

    <div id="icon" class="allCenter">
      <el-icon><ArrowRight /></el-icon>
    </div>

    <div  class="allCenter" id="button">
      <el-button size="large" type="primary" @click="request" round>分析&nbsp<el-icon><VideoPlay /></el-icon></el-button>
    </div>

    <div id="icon" class="allCenter">
      <el-icon><ArrowRight /></el-icon>
    </div>

    <div id="parent-right" class="allCenter shadow">
      <div class="title">
        <el-icon><Collection /></el-icon>
        输出
      </div>
      <el-scrollbar class="scrollbar">
        <div id="right" class="allCenter">

          <span class="arg">项目集规范族</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder=""
              v-model="C"
          >
          </el-input>

          <span class="arg">LR(0)分析表</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder=""
              v-model="analysisTable"
          >
          </el-input>

          <span class="arg">分析过程</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder=""
              v-model="analysisProcess"
          >
          </el-input>



        </div>
      </el-scrollbar>
    </div>


  </div>
</template>

<style scoped>
#whole {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
#right {
  display: flex;
  flex-direction: column;
}
.scrollbar {
  height: 500px;
  margin: 20px;
  padding: 2px;
  border: 2px solid grey;
  border-radius: 8px;
}
.arg {
  padding-bottom: 10px;
  text-align: center;
}
.output {
  width: 550px;
  padding-bottom: 20px;
  font: 14px "Consolas"
}
.input {
  width: 550px;
  font: 14px "Consolas"
}
</style>