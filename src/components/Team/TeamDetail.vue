<template>
  <div class="teamContainer">
    <div class="team">
      <div class="photoSide">
        <div class="photo">
          <img :src="detailTeamData.image" alt="" />
        </div>
        <div class="status">
          <p>{{ detailTeamData.positionKA }}</p>
          <p>{{ detailTeamData.emailKA }}</p>
        </div>
      </div>
      <div class="textSide">
        <h1>{{ detailTeamData.fullNameKA }}</h1>
        <p v-html="detailTeamData.descriptionKA"></p>
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
      detailTeamData: [],
    };
  },
  mounted() {
    const url = this.$route.params.id;
    axios
      .get(`${env.host}/api/get/once/teammate/${url}`)
      .then((result) => {
        this.detailTeamData = JSON.parse(JSON.stringify(result.data.onceTeam));
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.teamContainer {
  max-width: 1400px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 240px);
  /* background: linear-gradient(90deg, rgba(164,168,170,1) 18%, rgba(255,255,255,1) 18%);  */

  /* margin:auto; */
  margin-top: 145px;
  /* padding: 20px; */
}
.team {
  /* border: 2px solid green; */
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
}
.photo {
  width: 350px;
  height: 450px;
  /* border: 2px solid blue; */
}
.photo img {
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
}
.status {
  /* width: 370px; */
  /* border: 2px solid red; */
  /* width: 75%; */
  width: 350px;

  padding: 30px;
  background-color: #7f5496;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;

  /* border: 2px solid black; */
}

.textSide {
  /* border: 2px solid brown; */
  margin-left: 50px;
  padding: 20px;
  font-size: 22px;
  text-align: justify;
}
.textSide h1 {
  font-size: 28px;
  padding-bottom: 20px;
  color: #7f5496;
}

/* .photo img{
  -shadow: -2px -4px 0px 0px #462359 inset, 2px 2px 0px 0px #fff7 inset;
   border-radius: 180px 60pxbox ;
} */

@media all and (max-width: 1500px) {
  .team {
    margin: 40px;
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
  .photo {
    margin: auto !important;
    display: table;
  }
  .status {
    margin-left: auto;
    margin-right: auto;
  }
  /* .status {
    margin: auto;
  } */
}
@media only screen and (max-width: 640px) {
  .textSide {
    font-size: 18px;
  }
  .textSide h1 {
    font-size: 24px !important;
  }
}
@media all and (max-width: 527px) {
  .team {
    margin-left: 30px;
    margin-right: 30px;
  }
}
@media all and (max-width: 418px) {
  .photo {
    width: 100%;
    height: 100%;
  }
  .status {
    width: 100%;
  }
}
</style>
