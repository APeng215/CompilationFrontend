<template>
  <el-config-provider namespace="ep">
    <div id="header">
      <TopNav></TopNav>
    </div>


    <div id="main">
      <router-view></router-view>
    </div>



    
  </el-config-provider>
</template>

<style>
#app {
  height: 100vh;
}
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.shadow {
  border-radius: 25px;
  border: 2px solid #73AD21;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
#main_menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.allCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.allCenterHorizon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}




.title {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  text-align: center;
  padding-top: 15px;

}

</style>
<script>
import TopNav from "~/components/TopNav.vue";

export default {
  components: {TopNav},
  created() {
    this.$router.push('/lexicalAnalysis')
  }
}
</script>