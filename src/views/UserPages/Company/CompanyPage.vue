<template>
  <div class="company">
    <div class="title">
      <div class="titleInside">
      <h1>კომპანია და მისია</h1>
      </div>
    </div>
    <div class="main_content">
      <tabs>
        <tab title="კომპანია" class="tabs_values">
          <p v-if="lang=='ka'" v-html="company.textKA"></p>
          <p v-else> {{company.textEN}}</p>
          </tab
        >
        <tab title="მისია" class="tabs_values">
          <p v-if="lang=='ka'" v-html="mission.textKA"></p>
          <p v-else v-html="mission.textEN"></p>
          
          </tab
        >
      </tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Tab from "../../../components/tabs/Tab.vue";
import Tabs from "../../../components/tabs/Tabs.vue";
import env from "../../../env.json"

export default {
  components: {
    Tab,
    Tabs,
  },
  data(){
    return{
      company: {},
      mission: {},
      lang: "ka",
    }

  },
  mounted(){
    axios
    .get(`${env.host}/api/get/company/missions`).then((result)=>{
      this.company = result.data.item[0].company;
      this.mission = result.data.item[0].mission;
    })
    
    .catch((err)=> console.log(err));
     if (localStorage.getItem("lang") == "ka") {
      this.lang = "ka";
    } else {
      this.lang = "en";
    }
  },
};
</script>

<style scoped>
.main_content {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
}
.company {
  text-align: justify;
}
.company p {
  font-size: 20px;
}
.company span {
  font-size: 25px;
}
.title {
  background-image: url("../../../assets/img/Corporate-Social-Responsibility 1.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.titleInside {
  max-width: 1400px;
  float: unset;
  display: flex;
  width: 100%;
  margin: auto;
  height: 40rem;
  /* border: 2px solid green; */
}
.titleInside h1 {
  /* border: 4px solid black; */
  /* padding:10px 40px 10px 40px; */
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
 
}

.tabs_values {
  display: inline-block;
  align-self: center;
  
  /* color: #666666; */
  /* padding-top: 70px; */
}

@media all and (max-width: 1500px){
   .titleInside h1{
      padding:10px 40px 10px 40px;
   }

}

@media all and (max-width: 1400px) {
  .main_content {
    padding: 0 40px 0 40px;
  }
  
}
@media all and (max-width: 1280px) {
  .company p {
    font-size: 2vw;
    padding-bottom: 50px;
  }
  .company span {
    font-size: 2vw;
  }
}
@media all and (max-width: 992px) {
  .company p {
    font-size: 2.5vw;
  }
  .company span {
    font-size: 3vw;
  }
  .titleInside h1{
    margin: auto;
    margin-top: 480px;
  }
}
@media all and (max-width: 749px) {
  .company p {
    font-size: 3vw;
  }
}
@media all and (max-width: 532px) {
  .company p {
    font-size: 4vw;
  }
  .company span {
    font-size: 4vw;
  }
}
@media all and (max-width: 332px) {
  .company p {
    font-size: 5vw;
  }
  .company span {
    font-size: 5vw;
  }
}
</style>