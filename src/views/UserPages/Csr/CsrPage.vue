<template>
  <div class="csr">
    <div class="title">
      <div class="titleInside">
        <h1>CSR</h1>
      </div>
    </div>

    <div class="main_content">
      <div class="projects">
        <div v-for="(item, index) in csrData" :key="index" class="hovereffect">
          <img :src="item.defaultImage" alt="" />
          <div class="overlay">
            <h2>{{ item.titleKA }}</h2>
            <p v-html="`${item.descriptionKA.substring(0, 200)}...`"></p>

            <router-link
              :to="{ name: 'csrDetails', params: { id: item.slug } }"
              class="info"
              exact-path
              ><span>მეტის ნახვა</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../env.json";
export default {
  name: "csr",
  data() {
    return {
      csrInfo: {},
      csrData: [],
    };
  },
  mounted() {
    // axios
    //   .get(`${env.host}/api/get/csr/info`)
    //   .then((result) => {
    //     this.csrInfo = result.data;
    //   })
    //   .catch((err) => console.log(err));
    axios
      .get(`${env.host}/api/get/csr`)
      .then((result) => {
        this.csrData = JSON.parse(JSON.stringify(result.data.item));
      })
      .catch((err) => console.log(err));
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

.title {
  background-image: url("../../../assets/img/testPhoto.jpg");
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
}
.title h1 {
  /* border: 4px solid black; */
  padding: 20px 0px 20px 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
}

.projects {
  padding: 70px 0 50px 0;
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
.hovereffect {
  /* border: 2px solid red; */
  width: 100%;
  height: auto;
  cursor: default;
}

.hovereffect img {
  border-radius: 10px;

  width: 100%;
  height: 350px;
  display: block;
}

.hovereffect h2 {
  margin: auto;
  color: #462359;
  padding-top: 20px;
  padding-bottom: 20px;
}
.hovereffect p {
  padding-bottom: 20px;
  color: #666666;
  text-align: justify;
}

.hovereffect a.info {
  text-align: center;
  text-decoration: none;
  color: #462359;
  border: 1px solid #462359;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  font-weight: normal;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 10px 6px 10px;
  transition: 0.4s;
}

.hovereffect a.info:hover {
  color: #f2f5fa;
  background: #462359;
  transition: 0.4s;
}

@media all and (max-width: 1500px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }

  .titleInside h1 {
    padding: 10px 50px 10px 0px;
  }
}
@media all and (max-width: 1400px) {
  .main_content {
    padding: 0 40px 0 40px;
  }

  .csr .title {
    margin-top: 0px;
  }
}
@media all and (max-width: 1200px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 992px) {
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }
  .hovereffect img {
    height: 500px;
  }
  .hovereffect h2 {
    font-size: 2.5vw;
  }

  .projects {
    margin-bottom: 30px;
  }
  .hovereffect {
    /* border: 2px solid blue; */
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .title h1 {
    /* font-size: 3vw; */
    margin: auto;
    margin-top: 480px;
    padding: 0px;
  }
}
@media all and (max-width: 768px) {
  .hovereffect img {
    height: 400px;
  }
  .hovereffect h2 {
    font-size: 3.5vw;
    /* margin-top: 100px; */
  }
  /* .title h1 {
    font-size: 3.5vw;
  } */
}
@media all and (max-width: 640px) {
  .hovereffect p {
    font-size: 18px;
  }
}

@media all and (max-width: 450px) {
  .hovereffect img {
    height: 300px;
  }
  /* .title h1 {
    font-size: 3.6vw;
  } */
  .hovereffect h2 {
    font-size: 4.5vw;
  }
}
@media all and (max-width: 400px) {
  .hovereffect img {
    height: 250px;
  }
  .hovereffect h2 {
    /* margin-top: 50px; */
    /* width: 150px; */
    font-size: 5.5vw;
    margin: 0px;
    /* width:100px; */
  }
}
@media all and (max-width: 316px) {
  .hovereffect a.info {
    width: 150px;
  }
}
</style>
