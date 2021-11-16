<template>
  <div class="admin">
    <div class="header">
      <div class="header_text">
        <h4>სამართავი პანელი</h4>
        <i class="fas fa-bars"></i>
      </div>
      <div class="button">
        <router-link to="/admin" exact>
          <i class="far fa-arrow-alt-square-left"></i>
          {{ $t("logout") }}
        </router-link>
      </div>
    </div>
    <div class="side_bar">
      <SideBar />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/Navbar/SideBar.vue";

export default {
  name: "adminpage",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.admin {
  margin-top: 0 !important;
}
.side_bar {
  display: grid;
  grid-template-columns: 0.6fr 5fr;
  background: #7f5496;
  height: 100vh;
}
.content {
  background: white;
  border-radius: 5px;
  margin: 6px 6px 6px 0px;
}
.header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dadada;
}
.header_text {
  display: flex;
  align-items: center;
}
.header_text i {
  margin: -3px 0 0 10px;
  padding: 8px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  background: #dadada;
}
.button {
  margin-left: auto !important;
  margin-right: 0 !important;
}
.button a {
  color: black;
}
.button a:hover {
  color: royalblue;
  transition: 0.2s;
}
.button i {
  font-size: 20px;
}
</style>