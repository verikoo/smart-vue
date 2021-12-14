<template>
  <div class="teamContainer">
    <div class="team">
      <div class="textSide">
        <h1 v-if="lang == 'ka'">{{ personalData.titleKA }}</h1>
        <h1 v-else>{{ personalData.titleEN }}</h1>
        <p>
          <span>
            <span
              class="photoSide"
              v-if="personalData.mainImage != null"
              style="float: left"
            >
              <img :src="personalData.mainImage" alt="" />
            </span>
            <span
              class="photoSide videoSide"
              style="float: left"
              v-if="personalData.video != null"
              v-html="personalData.video"
            >
              <iframe style="border-radius: 10px" frameborder="0"></iframe>
            </span>
          </span>
          <span
            class="text"
            v-if="lang == 'ka'"
            v-html="personalData.descriptionKA"
          ></span>
          <span class="text" v-else v-html="personalData.descriptionEN"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../env.json";
export default {
  name: "teamDetail",
  data() {
    return {
      personalData: [],
      lang: "ka",
    };
  },
  mounted() {
    let url = this.$route.params.id;
    axios
      .get(`${env.host}/api/get/local/partners/${url}`)
      .then((result) => {
        this.personalData = JSON.parse(JSON.stringify(result.data.item));
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
.teamContainer {
  align-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: calc(100vh - 240px);
  display: flex !important;
  justify-content: center;
  text-orientation: mixed;
  /* border: 2px solid rgb(136, 255, 0); */
  margin-top: 145px;
  margin: auto;
}
.team {
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.status {
  padding: 30px;
  background-color: #7f5496;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
}
.textSide {
  text-align: justify;
  font-size: 21px;
  margin: auto;
  align-items: center;
}

.textSide h1 {
  font-size: 24px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  color: #7f5496;
}
.textSide p {
  margin: auto;
}

.photoSide {
  width: 40%;
  /* border: 2px solid red; */
  height: 50%;
  margin-right: 20px;
  margin-bottom: 5px;
}

.photoSide img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  margin: auto;
  border-radius: 5px;
}
.videoSide {
  width: inherit !important;
  height: 350px;
}

.videoSide video {
  border-radius: 10px;
}

@media all and (max-width: 1501px) {
  .team {
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
@media all and (max-width: 1130px) {
  .textSide {
    padding: 0px;
  }
}

@media all and (max-width: 930px) {
  .photoSide {
    float: none !important;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 20px;
    padding-right: 0px;
    width: 80%;
  }
}

@media all and (max-width: 652px) {
  /* .team {
    margin-left: 30px;
    margin-right: 30px;
  } */

  .videoSide {
    width: 450px !important;
  }

  .photoSide img {
    width: 100%;
  }
}

@media all and (max-width: 543px) {
  .videoSide {
    width: 400px !important;
  }
}
@media all and (max-width: 527px) {
  .videoSide {
    width: 400px !important;
  }
  .team {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media all and (max-width: 468px) {
  .videoSide {
    width: 350px !important;
  }
}
@media all and (max-width: 440px) {
  .videoSide {
    width: 100px !important;
  }
}

/* 



@media all and (max-width: 878px) {
  
}
@media all and (max-width: 727px) {
  .team {
    padding: 0px;
  }

  .textSide {
    padding: 0px;
  }
  .photoSide {
    width: 100%;
  }
  .photoSide img {
    padding: 0px;
  }
}
@media all and (max-width: 640px) {
  .textSide {
    font-size: 18px;
  }
  .videoSide {
    border: 2px solid green;
  }
}
@media all and (max-width: 579px) {
  .team {
    width: 90%;
  }

  .photoSide {
    width: 100%;
  }
}

@media all and (max-width: 518px) {
}

@media all and (max-width: 449px) {
  .team {
    border: 2px solid red;
  }
  .textSide {
    width: 100%;
    border: 2px solid yellow;
  }
}

@media all and (max-width: 378px) {
  .textSide p {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media all and (max-width: 368px) {
  .textSide p {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media all and (max-width: 328px) {
  .textSide p {
    padding-left: 10px;
    padding-right: 10px;
  }
} */
</style>
