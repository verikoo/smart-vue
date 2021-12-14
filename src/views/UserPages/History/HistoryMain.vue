<template>
  <div class="history_main_container">
    <HistoryRight />
  </div>
</template>

<script>
import HistoryRight from "./Right/HistoryRight.vue";
export default {
  name: "HistoryMain",
  components: { HistoryRight },
};
</script>

<style scoped>
.history_main_container {
  margin-top: 0px !important;
  width: 100%;
  max-width: 1920px;
  display: flex;
  margin: auto;
  background-color: #462359;
}

@media only screen and (max-width: 1200px) {
  .history_main_container {
    display: block;
  }
}
</style>
