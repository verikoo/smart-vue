<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="seperating">
        <div class="footerGrid">
          

          <div class="footerLogo">
           <!-- <img src="../../assets/img/logoWhite.png"> -->
             <div class="footerIcones">
              <div class="socialEl ">
                    <img src="../../assets/icons/fbsmart.png" alt="">
                 </div>
                 <div class="socialEl ">
                    <img src="../../assets/icons/linkedsmart.png" alt="">
                 </div>
                 <div class="socialEl ">
                    <img src="../../assets/icons/instasmart.png" alt="">
                 </div>
                 <div class="socialEl ">
                    <img src="../../assets/icons/yousmart.png" alt="">
                 </div>


            </div>
          </div>
         
           

             <div class="footerSocial">
            <div class="footerAddress">
                <div class="footerAddressInside">
                    <img src="../../assets/icons/location.png" alt="" />
                    {{ $t("address") }}
                  </div>
                   <div class="footerAddressInside">
                    <img src="../../assets/icons/call-back.png" alt="" />
                    +995 555 55 55 55
                 </div>
            </div>
               
              </div>

         
        </div>
      </div>

      <div class="createdByFooter">
        <div>
          <p>2021 &#169; {{ $t("copyright") }}</p>
        </div>

        <div>
          <p>{{ $t("created_by") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.footer {
  /* border:2px solid red; */
  background-color: #7F5496;
  color: #e6e6e6;
  font-size: 12px !important;
}

.footerContainer {
  width: 100%;
  margin: auto;
}

.footerGrid {
  /* border: 2px solid blue; */
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display:flex;
  justify-content: space-between;
}

.footerGrid ul {
  list-style-type: none;
}
.socialEl{
  /* border: 1px solid red; */
  /* margin: 0px 40px; */
  margin-right: 5px;
  margin-left: 5px;
}

.footerLogo {
  /* border: 2px solid orange; */
  /* margin: auto; */
  /* width: 30%; */
  height: auto;
  object-fit: cover;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  float:left;
  /* border:2px solid red; */
  align-items: center;
}
.footerLogo img {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 60%;
  height: auto;
}

.footerIcones{
  /* border: 2px solid pink; */
  display: flex;
  /* justify-content: center; */
  /* float: right; */
  margin:auto;
  /* border:2px solid red; */
  /* margin: auto;
  
  /* margin:left; */
  align-items: center;
  
}





.footerAddressInside{
  /* align-items: center; */
  /* border: 2px solid yellow; */
  /* justify-content: end; */
  margin-top: 10px ;
  text-align: right;
 
  /* float: right;
   */
   margin: right auto;
}
.footerAddress img{
  width: 20px;
}
.footerAddress {
    display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footerIcones img{
  width: 30px;
  /* margin-left:10px; */
  
}

.socialElStart{
  margin-right: 60px;
}




.seperating {
  box-shadow: #e3bff256 0px 2px 8px 0px;
}




.createdByFooter {
  padding: 20px 0px 20px 0px;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.createdByFooter p {
  display: flex;
  text-align: center;
}

li a {
  text-decoration: none;
  background-color: none;
}
a,
a:visited,
a:hover,
a:active {
  color: inherit;
  cursor: pointer;
}

ul a.router-link-exact-active.router-link-active {
  color: #e8b1ff;
  font-weight: bold;
  transition: 0.3s;
}
a {
  text-align: center;
  display: inline-block;
  position: relative;
}
a::after {
  content: "";
  width: 0;
  height: 0.5px;
  position: absolute;
  transition: all 0.2s linear;
  background: #e8b1ff;
  left: 0;
  bottom: 0;
}
a:hover::after {
  width: 100%;
}
a:hover {
  color: #e8b1ff;
}



@media all and (max-width: 1210px) {

 
  .navLinksGrid ul,
  .navLinks p {
    text-align: center;
    justify-content: center;
    padding: 10px;
  }
  .navLinks p{
    margin-right: 23px;
  }
}
@media all and (max-width: 1500px) {
  .createdByFooter, .footerGrid {
    padding: 10px 40px 10px 40px;
  }

  /* .footerGrid {
    padding: 20px 40px 10px 40px;
  } */
}



@media all and (max-width: 990px) {

 
  /* .footerSocial{
    border: 10px solid pink;
    display: grid;
    grid-template-columns: auto auto ;
  } */
}



@media only screen and (max-width: 900px) {
  .footerGrid {
    display: grid !important;
    grid-template-columns: auto !important;
    justify-content: space-around;
  }
  
  
  .createdByFooter p {
    justify-content: center !important;
    text-align: center !important;
  }


  .createdByFooter {
    display: grid !important;
    grid-template-columns: auto !important;
    justify-content: center;
  }
  .createdByFooter p {
    margin: 10px;
  }

  .footerGrid {
    display: flex;
    justify-content: center;
  }

  .footerLogo {
    display: flex !important;
    justify-content: center !important;
    margin:auto;
    align-items: center !important;

  }

  /* .footerLogo img {
    text-align: center !important;
    width: 300px;
    height: auto;
  } */
  .footerAddressInside{
    text-align: center;
  }

  
}

@media only screen and (max-width: 360px) {
  .navLinksGrid {
    display: grid;
    grid-template-columns: auto;
    margin: auto;
  }
 

  .navLinks p {
    margin-right: 0px;
    border:2px solid black;
  }

  /* .footerLogo img {
    width: 200px;
  } */
  .navLinks,
  .footerSocial {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .navLinks a {
    padding: 5px !important;
  }

  .footerAddress{
    gap:0px;
    justify-content: center;
  }
}
</style>