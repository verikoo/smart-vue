<!--
<template>
  <div class="history_left_container">
    <div><a href="/" class="history_left_image">
      <img
        src="../../../../assets/img/logo.png"
        alt="Smartpharm logo"
      />
    </a></div>
    <div>
      <div class="first_line_right">
            
              <li>
                <router-link to="/" exact> {{ $t("home") }}</router-link> / კომპანია

              </li>
              
           
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryLeft",
};
</script>

<style scoped>
.history_left_container {
  /* border:2px solid red; */
  width: 100%;
  max-width: 300px;
  height: 100%;
  height: 100vh;
  padding: 0px 30px;
  background-color: #462359;
  /* border-right: 2px solid white !important; */
 
}
.history_left_image{
  display: block;
  margin: auto;
  margin-top: 30px;
}

.history_left_image  img {
  /* width: 80%;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 35px; */
   width: 100%;
  display: block;
  margin: auto;
  margin-top: 50px !important;
}


/* routessss */
.first_line_right  li {
  list-style-type: none;
  display:flex;
  justify-content: center;
  color: white;
   font-size: 18px;
   margin-top: 40px;
   color: #A4A8AA;
}

.first_line_right  li a{
  color: white;
}
li .router-link-active {
  color:#e8b1ff;
  font-weight: bold;
  transition: 0.4s;
}
li .router-link-active {
  color:#e8b1ff;
  font-weight: bold;
  transition: 0.4s;
}

a::after {
  content: "";
  width: 0;
  height: 0.5px;
  position: absolute;
 transition: all 0.3s ease-in-out;
  background-color: #e8b1ff;
  left: 0;
  bottom: 0;
  
 
}
a:hover{
  
  
   color:  #e8b1ff;
}
a:hover::after {
  width: 100%;
}
/* routessss */

@media only screen and (max-width: 1200px) {
  .history_left_container {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .history_left_image {
    margin-top: 0px;
  }
}
</style>
-->
