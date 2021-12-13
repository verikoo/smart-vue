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
                <img style="float: right" :src="historyData.image" alt="" />
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
  min-height: calc(100vh - 100px);
  background-color: white;
  /* border: 2px solid red; */
}
.photoSide img {
  border-radius: 10px;
  margin-left: 40px;
  margin-bottom: 10px;
  /* border:2px solid blue; */
}

.containerForSize {
  max-width: 1400px;
  display: grid;
  justify-content: center;
  margin: auto !important;
  align-items: center;
  align-content: center;
  /* padding: 40px; */
}

.textSide {
  text-align: justify;
  display: flex;
  margin: auto;
  /* border:2px solid red; */
  padding-bottom: 60px;
}

.textSide p {
  font-size: 22px;
}

.title {
  margin-top: 100px;
  padding-top: 100px;
  color: #7f5496;
  margin-bottom: 20px;
}

@media all and (max-width: 1500px) {
  .containerForSize {
    padding-left: 40px;
    padding-right: 40px;
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
  .title {
    text-align: center;
    padding: 40px 40px 10px 40px;
  }
  .photoSide img {
    float: none !important;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 20px;
  }
  .containerForSize {
    margin-top: 40px !important;
  }
}

@media all and (max-width: 425px) {
  .title {
    text-align: center;
  }
  .photoSide img {
    width: 300px;
  }

  .textSide {
    padding: 0px 40px 40px 40px;
  }
}
</style>
