<template>
  <div class="team">
    <div class="header">
      <div class="titleInside">
        <h1>ჩვენი გუნდი</h1>
      </div>
    </div>

    <div class="main_content">
      <!-- <div class="title">
        <h1>მიიღეთ სწორი გადაწყვეტილება</h1>
      </div>

      <div class="icon">
        <div class="exact_icon">
          <i class="fas fa-users"></i>
          <p>მხარდაჭერა</p>
        </div>
        <div class="exact_icon">
          <i class="fas fa-project-diagram"></i>
          <p>გადაწყვეტილება</p>
        </div>
        <div class="exact_icon">
          <i class="fas fa-hands-heart"></i>
          <p>ზრუნვა</p>
        </div>
        <div class="exact_icon">
          <i class="fas fa-bolt"></i>
          <p>ძალა</p>
        </div>
      </div>

      <div class="title">
        <h1>ჩვენი პარტნიორები</h1>
      </div> -->

      <div class="brands">
        <div v-for="(item, index) in teamData" :key="index" class="hovereffect">
          <img :src="item.image" alt="" />
          <div class="overlay">
            <h5>
              <div>{{ item.fullName }}</div>
              <div>{{ item.position }}</div>
            </h5>
            <router-link
              :to="{ name: 'teamDetail', params: { id: item.slug } }"
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
  name: "team",
  data() {
    return {
      teamData: [],
    };
  },
  mounted() {
    axios
      .get(`${env.host}/api/get/all/teammate`)
      .then((result) => {
        this.teamData = JSON.parse(JSON.stringify(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.main_content {
  /* border: 2px solid yellow; */
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
}
.header {
  display: flex;
  width: 100%;
  margin: auto;
  /* margin-top: 50px; */
  height: 40rem;
  background-image: url("../../../assets/img/adam-niescioruk-hWzrJsS8gwI-unsplash.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.titleInside {
  /* border: 2px solid green; */

  max-width: 1400px;
  float: unset;
  display: flex;
  width: 100%;
  margin: auto;
  height: 40rem;
}

.titleInside h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
}

.title {
  padding-top: 50px;
  text-align: center;
}
.title h1 {
  margin: auto;
  text-align: center;
  width: 50%;
  padding-top: 50px;
  font-size: 30px;
  color: #7f5496;
}

.icon {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
.icon img {
  width: 70px;
}
.exact_icon {
  text-align: center;
  padding: 150px 0 150px 0;
}
.exact_icon p {
  color: #571f8e;
  font-weight: 600;
  font-size: 20px;
}
.exact_icon i {
  color: #7f5496;
  margin-bottom: 20px;
  font-size: 50px;
}
.brands {
  /* border:2px solid red; */
  padding: 50px 0 50px 0;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}
.hovereffect {
  border-radius: 20px;
  width: 100%;
  height: auto;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
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
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}

.hovereffect:hover .overlay {
  background-color: #5f07924d;
}

.hovereffect img {
  width: 100%;
  height: 350px;
  display: block;
  position: relative;
  object-fit: cover;
}

.hovereffect h5 {
  margin: auto;
  color: #fff;
  position: relative;
  width: 50%;
  font-size: 20px;
  margin-top: 100px;
  padding: 10px;
  -webkit-transform: translateY(60px);
  -ms-transform: translateY(60px);
  transform: translateY(60px);
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}

.hovereffect:hover h5 {
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
  font-size: 20px;
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
    margin: auto;
    margin-top: 480px;
    padding: 0px;
  }
  .hovereffect a.info {
    position: static;
    margin: auto;
    margin-top: 40px;
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

  .title h1 {
    padding-top: 0px;
  }
}
@media all and (max-width: 450px) {
  .hovereffect img {
    height: 300px;
  }
  .title h1 {
    width: 70%;
  }
}
@media all and (max-width: 414px) {
}
@media all and (max-width: 400px) {
  .hovereffect img {
    height: 250px;
  }
}
</style>
