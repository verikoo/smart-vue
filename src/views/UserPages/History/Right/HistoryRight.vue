<template>
  <div class="container">
    <div class="containerForSize">
      <div class="whole">
        <div>
          <h1 class="title" v-if="lang == 'ka'">{{ historyData.titleKA }}</h1>
          <h1 class="title" v-else>{{ historyData.titleEN }}</h1>
        </div>

        <div class="wholeHorizontal">
          <div class="textSide">
            <p>
              <span class="photoSide">
                <img style="float: left" :src="historyData.image" alt="" />
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
  max-width: 1400px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 240px);
}

.photoSide img {
  border-radius: 10px;
  margin-right: 40px;
  margin-bottom: 10px;
  /* border: 2px solid blue; */
}

.containerForSize {
  max-width: 1400px;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  justify-content: center;
  margin: auto !important;
  align-items: center;
  align-content: center;
  /* padding: 40px; */
  /* border: 2px solid yellow; */
}

.textSide {
  text-align: justify;
  display: flex;
  margin: auto;
  margin-top: 30px;
  /* border: 2px solid red; */
  padding-bottom: 20px;
}

.textSide p {
  font-size: 21px;
}

.title {
  padding-top: 10px;
  color: #7f5496;
  text-align: center;
  margin-bottom: 20px;
  /* border: 2px solid red; */
}
.whole h1 {
  align-items: center;
  /* border: 2px solid black; */
  font-size: 28px !important;
}

@media all and (max-width: 1500px) {
  /* {
    padding-left: 40px;
    padding-right: 40px;
  } */
  .containerForSize {
    padding: 40px;
    /* border: 30px solid grey; */
  }
}

@media all and (max-width: 1080px) {
  .title h1 {
    padding: 0px;
  }
  .title {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  }
}

@media all and (max-width: 771px) {
  .textSide {
    flex-direction: column;
  }
  .wholeHorizontal {
    flex-direction: column;
  }
  .textSide p {
    font-size: 20px;
  }

  .photoSide img {
    float: none !important;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 20px;
  }
  /* .containerForSize {
    margin-top: 40px !important;
  } */
}

@media all and (max-width: 640px) {
  .whole h1 {
    font-size: 20px !important;
  }
  .textSide p {
    font-size: 18px;
  }
}
@media all and (max-width: 527px) {
  .containerForSize {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media all and (max-width: 425px) {
  .title {
    text-align: center;
  }
  .photoSide img {
    width: 500px;
  }
  /* 
  .textSide {
    padding: 0px 40px 40px 40px;
  } */
}
@media all and (max-width: 418px) {
  .team {
    margin-left: 30px;
    margin-right: 30px;
  }
  .photoSide img {
    width: 250px;
  }

  .status {
    width: 100%;
  }
}
@media all and (max-width: 310px) {
  .photoSide img {
    width: 220px;
  }
}
</style>
