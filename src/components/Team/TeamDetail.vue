<template>
  <div class="teamContainer">
    <div class="team">
      <div class="photoSide">
        <div class="photo">
          <img :src="detailTeamData.image" alt="" />
        </div>
        <div class="status">
          <p>{{ detailTeamData.position }}</p>
          <p>{{ detailTeamData.email }}</p>
        </div>
      </div>
      <div class="textSide">
        <h1>{{ detailTeamData.fullName }}</h1>
        <p v-html="detailTeamData.description"></p>
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
        this.detailTeamData = JSON.parse(JSON.stringify(result.data));
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
  min-height: calc(100vh - 258px);
  /* background: linear-gradient(90deg, rgba(164,168,170,1) 18%, rgba(255,255,255,1) 18%);  */
  /* border: 2px solid red; */
  /* margin:auto; */
  margin-top: 145px;
  /* padding: 20px; */
}
.team {
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
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
  /* border: 2px solid black; */
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

/* .photo img{
  -shadow: -2px -4px 0px 0px #462359 inset, 2px 2px 0px 0px #fff7 inset;
   border-radius: 180px 60pxbox ;
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
