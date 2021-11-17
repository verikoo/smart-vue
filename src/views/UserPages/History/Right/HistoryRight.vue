<template>
  <div class="container">
    <div class="containerForSize">
      <div class="whole">
        <div>
          <h1 class="title" v-if="lang=='ka'">{{ historyData.titleKA }}</h1>
          <h1 class="title" v-else>{{ historyData.titleEN }}</h1>
        </div>

       <!-- <div class="wholeHorizontal">
          <div class="textSide">
            <p v-html="historyData.textKA"></p>
          </div>
          <div class="photoSide">
            <img :src="historyData.image" alt="" />
          </div>
        </div> -->
         <div class="wholeHorizontal">
          
          <div class="textSide" >
            <p>
              
              <span class="photoSide">
            <img style="float:right" :src="historyData.image" alt="" />
          </span>
          <span v-if="lang == 'ka'" v-html="historyData.textKA"></span>
          <span v-else v-html="historyData.textEN"></span>
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../../env.json";
export default {
  name: "HistoryRight",
  data() {
    return {
      historyData: {},
      lang: "ka",
    };
  },
  mounted() {
    axios
      .get(`${env.host}/api/get/companies/history`)
      .then((result) => {
        this.historyData = result.data.item;
      })
      .catch((err) => console.log(err));
      if (localStorage.getItem("lang") == "ka") {
      this.lang = "ka";
    } else {
      this.lang = "en";
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 258px);
  background-color: white;
  /* padding: 40px; */
  /* border:2px solid black; */
}
.photoSide img {
  float: right;
  border-radius: 20px;
  margin-left: 40px;
  margin-bottom: 10px;
}

.containerForSize {
  max-width: 1400px;
  display: grid;
  justify-content: center;
  margin: auto !important;
  align-items: center;
  align-content: center;
  /* border:2px solid red; */
  padding: 40px;
}

/* .whole {
  display: grid;
  grid-template-columns: auto;
  font-size: 20px;
} */

/* .wholeHorizontal {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
} */

 /* .textSide {
  display: flex;
  margin: auto; 
  margin-top: 30px;
  padding: 0px 0px 0px 30px;
  padding-top:30px;
}  */
.textSide{
  text-align: justify;
  display: flex;
  /* width:550px; */
  margin:auto;
   /* width:1200px; */
   padding-bottom: 60px;
    /* height: 400px; */
  /* margin-left: 20px; */
}

.textSide p{
  font-size: 24px;
  /* height: 300px; */
 /* width: 1000px; */
  /* border: 2px solid red; */
}



/* .photoSide {
  display: flex;
  margin: auto;
} */

.title {
  margin-top: 100px;
  padding-top: 100px;
  color: #7f5496;
  margin-bottom: 20px;
  /* border:2px solid red; */

}



@media all and (max-width: 1670px) {
  .title {
    padding: 40px 40px 40px 0px;
    
  }


  /* .textSide {
    padding-left: 40px;
    padding-right: 200px;
  } */
  /* .textSide {
    margin-bottom: 20px;
  } */
  /* .wholeHorizontal {
    border:2px solid blue;
    grid-template-columns: 2fr 1fr;
  } */
 
}

@media all and (max-width: 1343px) {
  /* .wholeHorizontalpadding {
    padding-left: 60px;
    padding-right: 60px;
  } */

  /* .photoSide{
   display: flex;
   justify-content: center;
  } */

 
}

@media all and (max-width: 1080px) {
  /* .textSide {
    margin-top: -20px;
    padding-left: 40px;
    padding-right: 40px;
  } */
  .title h1 {
    padding: 0px;
  }
  .title {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  }
  /* .wholeHorizontal {
    display: grid;
    grid-template-columns: auto;
  } */
  /* .photoSide{
    margin:0px;
  } */

 
}


@media all and (max-width: 425px) {
  .textSide {
    padding: 30px;
  }
  .title{
    text-align: center;
  }
  

  /* .photoSide {
    display: flex;
    justify-content: center;
  } */
  /* .photoSide img {
    width: 80%;
    justify-content: center;
  } */
}
</style>
