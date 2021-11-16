<template>
  <div class="container">
    <div class="containerForSize">
      <div class="whole">
        <div>
          <h1 class="title">{{ historyData.title }}</h1>
        </div>

        <div class="wholeHorizontal">
          <div class="textSide">
            <p v-html="historyData.firstText"></p>
          </div>
          <div class="photoSide">
            <img :src="historyData.image" alt="" />
          </div>
        </div>
        <div class="lastText">
          <p v-html="historyData.secondText"></p>
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
    };
  },
  mounted() {
    axios
      .get(`${env.host}/api/get/companies/history`)
      .then((result) => {
        this.historyData = result.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 258px);
  background-color: white;
  /* padding: 40px; */
}
.photoSide img {
  border-radius: 20px;
}

.containerForSize {
  max-width: 1400px;
  display: grid;
  justify-content: center;
  margin: auto !important;
  align-items: center;
  align-content: center;
}

.whole {
  display: grid;
  grid-template-columns: auto;
  font-size: 20px;
}

.wholeHorizontal {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
}

.textSide {
  /* border: 2px solid red; */
  display: flex;
  margin: auto;
  margin-top: 30px;
  /* padding: 0px 0px 0px 30px; */
  padding-top:30px;
}
.textSide p, .lastText p{
  text-align: justify;
}

.photoSide {
  display: flex;
  margin: auto;
}

.title {
  margin-top: 100px;
  padding-top: 150px;
  color: #7f5496;
  /* border:2px solid red; */

}

.lastText {
  padding-bottom: 60px;
  /* border:2px solid green; */
}


@media all and (max-width: 1670px) {
  .title {
    padding: 80px 40px 0px 40px;
    
  }


  .textSide {
    padding-left: 40px;
    padding-right: 200px;
  }
  .textSide {
    margin-bottom: 20px;
  }
  .wholeHorizontal {
    /* border:2px solid blue; */
    grid-template-columns: 2fr 1fr;
  }
  .lastText {
    margin-top: -30px;
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media all and (max-width: 1343px) {
  .wholeHorizontalpadding {
    padding-left: 60px;
    padding-right: 60px;
  }

  .photoSide{
   display: flex;
   justify-content: center;
  }

 
}

@media all and (max-width: 1080px) {
  .textSide {
    margin-top: -20px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .title h1 {
    padding: 0px;
  }
  .title {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  }
  .wholeHorizontal {
    display: grid;
    grid-template-columns: auto;
  }
  .photoSide{
    margin:0px;
  }

 
}


@media all and (max-width: 425px) {
  .textSide {
    padding: 30px;
  }
  .title{
    text-align: center;
  }
  

  .photoSide {
    display: flex;
    justify-content: center;
  }
  .photoSide img {
    width: 80%;
    justify-content: center;
  }
}
</style>
