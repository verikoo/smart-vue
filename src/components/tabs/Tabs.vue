<template>
  <div class="tabs">
    <div class="tabs_header">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="tab.title"
          @click="selectTab(index)"
          :class="{ active: selectedIndex === index }"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style>
.active {
  color:#7F5496;
  /* border-radius: 10px; */
 /* box-shadow: inset 8px 8px 8px #f2f5fa, inset -8px -8px 8px #dadada; */
}
.tabs_header {
  width:50%;
  display: inline-block;
  align-self: center;
  /* border: 2px solid green; */
}

.tabs {
  width:100%;
  max-width: 1400px;
  justify-content: center;
  height: 100vh;
  color: #7F5496;
  display: flex;
  padding: 10px;
  /* border:2px solid green; */
}
.tabs ul {
  list-style: none;
  /* width: 561px; */
  color: #A4A8AA;
  align-items: center;   
  /* border: 2px solid red; */

}
.tabs li {
  cursor: pointer;
  /* width: 80%; */
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
  margin: auto;
}
@media all and (max-width: 1600px) {
  .tabs ul {
    width: 450px;
  }
}
@media all and (max-width: 1450px) {
  .tabs ul {
    width: 350px;
  }
}
@media all and (max-width: 1348px) {
  .tabs ul {
    width: 250px;
  }
}
@media all and (max-width: 1280px) {
  .tabs {
    padding: 0px;
    display: table-cell;
    vertical-align: middle;
  }
  .tabs ul {
    width: 700px !important;
    display: flex;
  }
  .tabs li {
    text-align: center;
    font-size:20px;
  }
  .tabs_header {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top:50px;
    margin-bottom:50px;
  }
}

@media all and (max-width:768px) {
  .tabs ul {
    width: 500px !important;
  }
  
}
@media all and (max-width:532px) {
  .tabs ul {
    width: 300px !important;
  }
  
}
@media all and (max-width:329px) {
  .tabs ul {
    width: 200px !important;
  }
 
}
</style>