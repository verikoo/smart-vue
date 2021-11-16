<template>
  <div class="team_details">
    <div class="title">
      <h1>{{ csrDetailData.title }}</h1>
    </div>
    <div class="photo">
      <img :src="csrDetailData.mainImage" alt="" />
    </div>
    <div class="description">
      <div>
        <p v-html="csrDetailData.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../env.json";
export default {
  name: "partnersDetail",
  data() {
    return {
      csrDetailData: {},
    };
  },
  mounted() {
    let url = this.$route.params.id;
    axios
      .get(`${env.host}/api/get/once/csr/${url}`)
      .then((result) => {
        this.csrDetailData = result.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.title {
  /* border: 2px solid rgb(128, 0, 0); */
  writing-mode: tb-rl;
  transform: rotate(180deg);
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title h1 {
  text-align: right;
  /* padding-left: 50px; */
  font-size: 30px;
  color: #462359;
  text-align: center;
}
.team_details {
  /* border: 2px solid rgb(0, 255, 42); */
  min-height: calc(100vh - 258px);
  display: grid;
  margin-top: 145px;
  grid-template-columns: 0.256fr 2fr 2fr;
  /* padding: 30px !important; */
}
.team_details img {
  width: 100%;
  height: auto;
  margin: auto;
}
.description {
  /* border: 2px solid yellow; */
  display: flex;
  /* padding: 20px; */
  align-items: center;
}
.description p {
  padding: 20px;
  text-align: justify;
  font-size: 20px;
}
.photo {
  /* border: 2px solid blue; */
  display: flex;
}
.photo img{
  border-radius: 10px;
}

@media all and (max-width: 992px) {
  
  .team_details {
    padding: 30px !important;
    padding: 30px 0px;
    display: grid;
    grid-template-columns: auto !important;
  }
  .title {
    margin-bottom: 30px;
  }
  .description {
    margin-top: 30px;
  }
}

@media all and (max-width: 992px) {
  .partnersDetails {
    grid-template-columns: 1fr;
  }
  .title {
    writing-mode: horizontal-tb;
    transform: rotate(360deg);
  }
  .title h1 {
    padding-left: 0px;
  }
  .description {
    display: block;
  }

  .photo {
    margin: auto;
  }
}
@media all and (max-width: 400px) {
  /* .photo {
    width: 250px;
  } */
}
@media all and (max-width: 531px) {
}
</style>
