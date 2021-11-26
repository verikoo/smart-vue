<template>
  <div class="exlusive_brands">
    
    
  <div class="slider">
    <hooper :progress="true" :autoPlay="true" :playSpeed="3000" style="border-radius:20px" >
 <slide>
   <div class="conatiner">
        <img src="../../../assets/img/caree.png" alt="">
        <div class="sliderText"><p>ყველა ჩვენი მედიკამენტები სარგებლობს განსაკუთრებული სანდოობითა და წლების მანძილზე დაგროვილი პოზიტიური გამოცდილებით ევროპულ და უკვე ქართულ ბაზრებზე. მათი ეფექტურობა და ფორმულები დამტკიცებული და აღიარებულია ევროპისა და ამერიკის ჯანდაცვის ორგანიზაციების მიერ. ჩვენს პრეპარატებს წარმატებით იყენებენ ქვეყნის წამყვანი სპეციალისტები, კლინიკები და პოლიკლინიკები.

ჩვენ მუდმივად ვზრუნავთ ჩვენი შეთავაზებების გაუმჯობესებაზე უკეთესი გაგრძელებისთვის!</p></div>
        
   </div>
  </slide>
  <slide>
   <div class="conatiner">
        <img src="https://i.insider.com/5d8e6ec26f24eb50bc6d292a?width=700" alt="">
        <div class="sliderText"><p>ყველა ჩვენი მედიკამენტები სარგებლობს განსაკუთრებული სანდოობითა და წლების მანძილზე დაგროვილი პოზიტიური გამოცდილებით ევროპულ და უკვე ქართულ ბაზრებზე. მათი ეფექტურობა და ფორმულები დამტკიცებული და აღიარებულია ევროპისა და ამერიკის ჯანდაცვის ორგანიზაციების მიერ. ჩვენს პრეპარატებს წარმატებით იყენებენ ქვეყნის წამყვანი სპეციალისტები, კლინიკები და პოლიკლინიკები.

ჩვენ მუდმივად ვზრუნავთ ჩვენი შეთავაზებების გაუმჯობესებაზე უკეთესი გაგრძელებისთვის!</p></div>
        
   </div>
  </slide>
  <slide>
   <div class="conatiner">
        <img src="../../../assets/img/careerTablet.jpg" alt="">
        <div class="sliderText"><p>partner3</p></div>
        
   </div>
  </slide>

  <hooper-navigation slot="hooper-addons"></hooper-navigation>
   <hooper-progress slot="hooper-addons"></hooper-progress>
    <hooper-pagination slot="hooper-addons" ></hooper-pagination>
  
</hooper>
        </div>


    
   <div class="main_content">
      <div class="brands">
        <div
          v-for="(item, index) in exclusiveData"
          :key="index"
          class="hovereffect"
        >
          <img :src="item.image" alt="" />
          <div class="overlay">
            <h2>
              <div>{{ item.titleKA }}</div>
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
import { Hooper,
          Slide, Navigation as HooperNavigation,
          Pagination as HooperPagination,
          Progress as HooperProgress,} from 'hooper';
// import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  name: "partners",
    components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperProgress,
    HooperPagination,

  },
   data() {
    return {
      exclusiveInfo: {},
      exclusiveData: [],
    };
  },
    mounted() {
    
    axios
      .get(`${env.host}/api/get/exclusives/partners`)
      .then((result) => {
        this.exclusiveData = JSON.parse(JSON.stringify(result.data.item));
      })
      .catch((err) => console.log(err));
  },
 
 
};
</script>

<style scoped>

.exlusive_brands{
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
  margin-top: 20px;
  padding-top: 10px;
  
}
.aboutMedicine {
  max-width: 1400px;
  border:2px solid rgb(0, 255, 13);
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

/* slider */
.slider{
 width: 100%;
    position: relative;
    height: auto;
    border-radius: 20px;
    margin: auto;
    background-size: cover;
    margin-top: 40px;
}


.sliderText{
  /* border:2px solid red; */
  
 position: absolute;
 font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #462359;
  /* background-color: rgba(128, 128, 128, 0.596); */
  background-color: rgba(255, 255, 255, 0.555);
    justify-content: center;
  width: 80%;

}


.sliderText p{
    padding: 30px;
    justify-content: center;
    text-align: justify;
}


.slider img{
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    display: flex;
    margin: auto;
    justify-content: center center;
    /* border:2px solid yellow; */
    width: 100%;
    height: 500px;
    border-radius: 20px;
    
    
}

.hooper-slide{
    position: relative;
    border-radius: 20px;
}
.hooper{
        height: 400px;
        border-radius: 20px;
}

::v-deep .hooper-list{
    border-radius:20px;
}

::v-deep .hooper-progress-inner{
 background-color: #A480B7;
 
}
::v-deep .hooper-indicator.is-active{
  background: #A480B7;
}



/* slider */




@media all and (max-width: 1500px) {
  .slider{
      padding: 0px 30px 30px 30px;
  }

  .aboutMedicine p {
    padding: 50px;
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
   .sliderText{
    width: 90%;
  }
  
  .sliderText p{
    padding: 20px;
  }
 
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


  .hovereffect a.info {
    position: static;
    margin: auto;
    margin-top: 40px;
  }
 
}
@media all and (max-width: 768px) {
  .sliderText{
    font-size: 18px;
  }
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
  .sliderText{
    font-size: 16px;
  }
  .hovereffect img {
    height: 300px;
  }
  

  .hovereffect h2 {
    font-size: 25px;
  }
}
@media all and (max-width: 414px) {
  .sliderText{
    font-size: 15px;
  }
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
  .sliderText{
    font-size: 14px;
  }
}

@media all and (max-width: 302px) {
 
  .sliderText{
    font-size: 12px;
  }
}
</style>
