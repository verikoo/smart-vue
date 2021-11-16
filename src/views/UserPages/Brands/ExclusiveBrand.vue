<template>
  <div class="exlusive_brands">
    <div class="title">
      <div class="titleInside">
        <h1>{{ exclusiveInfo.text }}</h1>
      </div>
    </div>
    <div class="titleContainer">
      <div class="aboutMedicine">
        <p v-html="exclusiveInfo.description"></p>
      </div>
    </div>

    <div class="main_content">
      <div class="brands">
        <div
          v-for="(item, index) in exclusiveData"
          :key="index"
          class="hovereffect"
        >
          <img :src="item.defaultImage" alt="" />
          <div class="overlay">
            <h2>
              <div>{{ item.title }}</div>
            </h2>
            <router-link
              :to="{ name: 'exclusiveDetail', params: { id: item.slug } }"
              class="info"
              exact-path
              ><span class="seeMore">მეტის ნახვა</span></router-link
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
  name: "partners",
  data() {
    return {
      exclusiveInfo: {},
      exclusiveData: [],
    };
  },
  mounted() {
    axios
      .get(`${env.host}/api/get/exclusives/info`)
      .then((result) => {
        this.exclusiveInfo = result.data;
      })
      .catch((err) => console.log(err));
    axios
      .get(`${env.host}/api/get/all/exclusives`)
      .then((result) => {
        this.exclusiveData = JSON.parse(JSON.stringify(result.data));
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.aboutMedicine {
  max-width: 1400px;
  /* border:2px solid rgb(0, 255, 13); */
  /* border: 2px solid red; */
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: auto; */
  /* margin: 10px; */
  /* display: flex;
  float: left; */
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}

/* .aboutMedicine p{
    font-size: 80px;
    color:white;
} */

.aboutMedicine p {
  background: #e6e6e6;
  background: -webkit-linear-gradient(0deg, #e6e6e6 0%, #ffffff 100%);
  background: linear-gradient(0deg, #e6e6e6 0%, #ffffff 100%);
  /* text-indent: 50px; */
  font-size: 1.4rem;
  padding: 40px;
  /* font-family: inside_text; */
  color: #462359;
  /* font-weight:bold; */
  letter-spacing: 1px;
  background-color: white;
  margin-top: -110px;
  background-color: white;
  /* border: 5px solid #E6E6E6; */
}
.main_content {
  /* border: 2px solid yellow; */
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
}
.brands {
  /* border:2px solid red; */
  padding: 50px 0 50px 0;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.titleInside {
  max-width: 1400px;
  float: unset;
  display: flex;
  width: 100%;
  margin: auto;
  height: 40rem;
  /* border: 2px solid blue; */
}
.title {
  background-image: url("../../../assets/img/great.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.titleInside h1 {
  /* border: 4px solid black; */
  padding: 20px 00px 20px 0px;
  /* margin: 20px; */
  display: block;
  margin-bottom: 150px;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
}

/* .titleInside h1 {
  margin-top: -80px;
  padding: 20px 30px 20px 0px;
  margin-top: 0px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
} */

.hovereffect {
  border-radius: 20px;
  width: 100%;
  height: auto;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  margin: auto;
}

.hovereffect .overlay {
  background-color: #9e14b941;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  border-radius: 20px;
  top: 0;
  left: 0;
}

.hovereffect:hover .overlay {
  background-color: #4e1782a2;
}

.hovereffect img {
  object-fit: cover;
  width: 100%;
  height: 350px;
  display: block;
  position: relative;
}

.hovereffect h2 {
  margin: auto;
  color: #fff;
  position: relative;
  width: 90%;
  font-size: 30px;
  margin-top: 100px;
  padding: 10px;
  -webkit-transform: translateY(60px);
  -ms-transform: translateY(60px);
  transform: translateY(60px);
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}
.seeMore {
  font-size: 20px;
}

.hovereffect:hover h2 {
  -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
}

.hovereffect a.info {
  position: absolute;
  display: flex;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  font-weight: normal;
  font-size: 1.3vw;
  justify-content: center;
  border-radius: 20px;
  width: 200px;
  bottom: 30px;
  right: 20px;
}

.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}
@media all and (max-width: 1500px) {
  .aboutMedicine p {
    padding: 50px;
  }
  .titleInside h1 {
    padding: 10px 50px 10px 0px;
  }
}

@media all and (max-width: 1400px) {
  .main_content {
    padding: 0 40px 0 40px;
  }
}

@media all and (max-width: 1200px) {
  .brands {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 991px) {
  .brands {
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
  }
  .hovereffect img {
    height: 500px;
  }
  .hovereffect h2 {
    margin-top: 150px;
  }

  .titleInside h1 {
    margin-bottom: 0px;
    margin: auto;
    /* margin-top: 200px; */
    margin-top: 390px;
  }

  .hovereffect a.info {
    position: static;
    margin: auto;
    margin-top: 40px;
  }
  .titleInside h1 {
    margin: auto;
    margin-top: 480px;
    padding: 0px;
    margin-top: 380px;
  }
}
@media all and (max-width: 768px) {
  .hovereffect img {
    height: 400px;
  }
  .hovereffect h2 {
    margin-top: 100px;
  }
  .icon {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .exact_icon {
    text-align: center;
    padding-bottom: 0px;
    padding-top: 30px;
  }
}
@media all and (max-width: 450px) {
  .hovereffect img {
    height: 300px;
  }
  .title h1 {
    width: 70%;
  }

  .hovereffect h2 {
    font-size: 25px;
  }
}
@media all and (max-width: 414px) {
}
@media all and (max-width: 400px) {
  .hovereffect img {
    height: 250px;
  }
}

@media all and (max-width: 380px) {
  .seeMore {
    font-size: 15px;
  }
}
</style>
