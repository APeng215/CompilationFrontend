<script>
import {defineComponent} from 'vue'
import Config from "~/config";
export default defineComponent({
  name: "LexicalAnalyzer",
  data() {
    return {
      rowString: "",
      key2Code: "",
      preProcessedString: "",
      result: ""
    }
  },
  methods: {
    request() {
      fetch(Config.endPointIP + "/compilation/api/lexicalAnalysis", {
        method: "POST",
        body: this.rowString,
        headers: {
          "Content-type": "text/plain;charset=UTF-8",
        }
      })
          .then((response) => response.json())
          .then((json) => {
            this.key2Code = json.key2Code;
            this.preProcessedString = json.preProcessedString;
            this.result = json.result;
            console.log(json)
          })
    }
  }
})
</script>

<template>
  <div id="whole">
    <div id="parent-left" class="allCenter shadow">
      <div class="title">输入</div>
      <el-scrollbar class="scrollbar">
        <div id="left" class="allCenter">
          <el-input
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder="请输入内容"
              v-model="rowString"
              style="width: 500px"
          >
          </el-input>
        </div>
      </el-scrollbar>
    </div>



    <div  class="allCenter" id="button">
      <el-button size="large" type="primary" @click="request" round>分析</el-button>
    </div>

    <div id="parent-right" class="allCenter shadow">
      <div class="title">输出</div>
      <el-scrollbar class="scrollbar">
        <div id="right" class="allCenter">
          <span class="arg">单词-种别码 映射表</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder="请输入内容"
              v-model="key2Code"
              style="width: 500px"
          >
          </el-input>
          <span class="arg">预处理后的代码</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder="请输入内容"
              v-model="preProcessedString"
              style="width: 500px"
          >
          </el-input>
          <span class="arg">分析结果</span>
          <el-input
              class="output"
              type="textarea"
              :autosize="{ minRows: 2 }"
              placeholder="请输入内容"
              v-model="result"
              style="width: 500px"
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
    padding: 20px;
  }
  .arg {
    padding-bottom: 10px;
    text-align: center;
  }
  .output {
    padding-bottom: 20px;
  }
</style>