<template>
  <div class="teamContainer">
    <div class="team">
      <div class="photoSide">
        <div class="photo">
          <img :src="exclusivesData.mainImage" alt="" />
        </div>
      </div>
      <div class="textSide">
        <h1 v-if="lang == 'ka'">{{ exclusivesData.titleKA }}</h1>
        <h1 v-else>{{ exclusivesData.titleEN }}</h1>
        <p v-if="lang=='ka'" v-html="exclusivesData.descriptionKA"></p>
        <p v-else v-html="exclusivesData.descriptionEN"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../env.json";
export default {
  name: "teamDetail",
  data() {
    return {
      exclusivesData: {},
      lang: 'ka'
    };
  },
  mounted() {
    let url = this.$route.params.id;
    axios
      .get(`${env.host}/api/get/once/exclusives/${url}`)
      .then((result) => {
        this.exclusivesData = JSON.parse(JSON.stringify(result.data.item));
      })
      .catch((err) => console.log(err));

      if(localStorage.getItem("lang") == "ka") {
        this.lang = "ka";
      } else {
        this.lang=  "en";
      }
  },
};
</script>

<style scoped>
.teamContainer {
  align-content: center;
  min-height: calc(100vh - 258px);
  display: flex !important;
  justify-content: center;
  text-orientation: mixed;
  /* border:2px solid rgb(136, 255, 0); */
  margin-top: 145px;
}
.team {
  /* border: 2px solid red; */
  padding: 30px 0px;
  margin-top: 100px;

  width: 100%;
  max-width: 1450px;
  margin: auto;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  /* border:2px solid red; */
}
.photo {
  max-width: 100%;
}
.photo img {
  max-width: 100%;
  border-radius: 20px;
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
  /* border:2px solid brown; */
  margin-left: 50px;
  padding: 20px;
  font-size: 20px;
  font-family: inside_text !important;
}
.textSide h1 {
  padding-bottom: 20px;
  color: #7f5496;
}
.teamContainer img {
  padding: 10px;
}

/* .photo img{
  box-shadow: -2px -4px 0px 0px #462359 inset, 2px 2px 0px 0px #fff7 inset;
   border-radius: 180px 60px ;
} */

@media all and (max-width: 1444px) {
  .team {
    padding: 50px;
  }
}

@media all and (max-width: 1130px) {
  .textSide {
    padding: 0px;
  }
}

@media all and (max-width: 999px) {
  .team {
    display: grid;
    grid-template-columns: auto;
  }
  .textSide {
    margin-top: 30px;
    margin-left: 0px;
  }

  .textSide h1 {
    text-align: center;
  }
}
</style>
