<template>
  <div class="teamContainer">
    <div class="team">
        
      <div class="textSide">
        <h1 v-if="lang == 'ka'">{{ exclusivesData.textKA }}</h1>
        <h1 v-else>{{ exclusivesData.textEN }}</h1>
        <p>
          <span >
          <span class="photoSide" v-if="exclusivesData.image!=null"  style="float:left">
           <img  :src="exclusivesData.image" alt="" />
          </span>
          <span class="photoSide" style="float:left;" v-if="exclusivesData.video!=null" v-html="exclusivesData.video">
           <iframe   frameborder="0"></iframe>
          </span>
        </span>
        <span v-if="lang=='ka'" v-html="exclusivesData.descriptionKA"></span>
        <span v-else v-html="exclusivesData.descriptionEN"></span>
        
        </p>
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
      .get(`${env.host}/api/get/once/exclusives/partners/${url}`)
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
  width: 100%;
  min-height: calc(100vh - 258px);
  display: flex !important;
  justify-content: center;
  text-orientation: mixed;
  /* border:2px solid rgb(136, 255, 0); */
  margin-top: 145px;
}
/* .team {
  border: 2px solid red;
  padding: 30px 0px;
  margin-top: 100px;

  width: 100%;
  max-width: 1450px;
  margin: auto;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  border:2px solid red;
} */

.team{
  /* border: 2px solid yellow; */
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 40px; */
  /* padding-left: 40px;
  padding-right: 40px; */
  
  margin-top: 30px;
  margin-bottom: 30px;
}
.photo {
  max-width: 100%;
  /* border:2px solid red; */
}


.photo img {
  max-width: 100%;
  border-radius: 20px;
}

.textSide {
  
    
  text-align: justify;
  
  /* border:2px solid brown; */
  
  /* margin-left: 50px; */
  /* padding: 20px; */
  font-size: 20px;
  margin: auto;
   
   
}
.textSide h1{
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.textSide p{
  /* border: 2px solid blue; */
  /* padding: 30px; */

 margin: auto;
}

.photoSide{
  width:600px;
  /* border:2px solid green; */
  /* width: 80%; */
 
}

.photoSide img{
  width: 100%;
   padding-right: 30px;
  padding-bottom: 10px;
}


.textSide h1 {
  padding-bottom: 20px;
  color: #7f5496;
}
/* .photo img{
  box-shadow: -2px -4px 0px 0px #462359 inset, 2px 2px 0px 0px #fff7 inset;
   border-radius: 180px 60px ;
} */

@media all and (max-width:1501px) {
  .team {
    padding-left: 40px;
    padding-right: 40px;
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


}
@media all and (max-width: 878px) {
   
   .photoSide img{
     padding: 10px;
   }
  .photoSide {
   float:none !important;
   align-items: center;
   display: flex;
   justify-content: center;
   margin:auto;
   padding-bottom: 20px;
  }


}
@media all and (max-width: 727px) {
  .team{
  padding: 0px;
  }
  
 .textSide  {
   width: 90%;
   padding: 0px;
  /* border:2px solid rgb(0, 255, 34); */

 }
 .photoSide {
   width: 100%;
 }
 .photoSide img{
   padding:0px

 }
  

}
@media all and (max-width: 570px) {
  .team{
    width: 90%;
  }
  .textSide{
    width: 85%;
    /* 
    padding-left: 40px;
    padding-right: 40px; */
  }
 .photoSide{
   
   width: 100%;
   

 }

}

@media all and (max-width: 512px) {
  
.textSide{
  width: 80%;
}

}

@media all and (max-width: 490px) {
  
.textSide{
  width: 70%;
}

}


@media all and (max-width: 463px) {
  
.textSide{
  width: 70%;
}

}

@media all and (max-width: 449px) {
  
.textSide{
  width: 60%;
}

@media all and (max-width: 449px) {
  
.textSide{
  width: 60%;
}
.textSide p{
  padding-left: 10px;
  padding-right: 10px;
}



}}

@media all and (max-width: 368px) {
  
.textSide{
  width: 55%;
}
.textSide p{
  padding-left: 10px;
  padding-right: 10px;
}



}

@media all and (max-width: 368px) {
  
.textSide{
  width: 55%;
}
.textSide p{
  padding-left: 10px;
  padding-right: 10px;
}

}

@media all and (max-width: 328px) {

.textSide{
  width: 50%;
}

.textSide p{
  padding-left: 10px;
  padding-right: 10px;
}

}












</style>
