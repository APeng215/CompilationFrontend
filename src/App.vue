<template>
  <el-config-provider namespace="ep">
    <div id="header">
      <el-menu
          id="main_menu"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
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




.title {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  text-align: center;
  padding: 15px;
}

</style>
<script>
export default {
  created() {
    this.$router.push('/lexicalAnalysis')
  }
}
</script>