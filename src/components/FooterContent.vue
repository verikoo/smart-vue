<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="footGrid">
        <div class="footVert1">
          <div class="footRow1">
            <p><router-link to="/" exact>მთავარი</router-link></p>
            <p><router-link to="/career" exact>კარიერა</router-link></p>
          </div>
          <div class="footRow2">
            <p><router-link to="/about" exact
                    >ჩვენს შესახებ</router-link></p>
            <p><router-link to="/partners" exact>პარტნიორები</router-link></p>
            <p><router-link to="/csr" exact>მხარდაჭერა</router-link></p>
          </div>
          <div>
            <p>გუნდი</p>
            <p><router-link to="/blog" exact>ბლოგი</router-link></p>
            <p>ისტორია</p>
          </div>
          <div>
            <p><router-link to="/news" exact>სიახლე</router-link></p>
            <p> <router-link to="/contact" exact>კონტაქტი</router-link></p>
          </div>
        </div>

        <div class="footVert2">
          <img src="../../public/assets/logo.png" />
        </div>

        <div class="footVert3">
          <div class="footVert3_hor1">
            <div class="footerIcones">
              <div>
                <p>
                  <img src="../../public/assets/icons/facebook.png" /> facebook
                </p>
              </div>
              <div>
                <p>
                  <img src="../../public/assets/icons/whatsapp.png" /> whatsapp
                </p>
              </div>
              <div>
                <p>
                  <img src="../../public/assets/icons/twitter.png" /> ფარნავაზის
                  ქ N66
                </p>
              </div>
              <div>
                <p>
                  <img src="../../public/assets/icons/whatsapp.png" /> instagram
                </p>
              </div>
              <div>
                <p>
                  <img src="../../public/assets/icons/twitter.png" /> twitter
                </p>
              </div>
              <div><p>
                <img src="../../public/assets/icons/twitter.png" /> +995 555 55
                55 55
              </p></div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="endTitle">
        <div>
          <p>2021 &#169; ყველა უფლება დაცულია</p>
        </div>
        <div class="createdBy">
          <p>შექმნილია Cyber Solutions-ის მიერ</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default{
  
}


</script>


<style scoped>
.footer {
  background-color: #591a92;
  color: white;
}

.footer a{
  color: white;
  text-decoration: none;
  background-color: none;
}
.footerContainer {
  width: 100%;
  max-width: 1920px;
  margin: auto;
}


.footGrid {
 padding-top: 2vw;
 
  display: grid;
  grid-template-columns: auto auto auto;
}

.footVert3 img {
  margin-bottom: -0.5vw;
}

.footVert1 {
  border-top: 1px solid white;
  /* border: 2px solid yellow; */
  display: grid;
  grid-template-columns: auto auto auto auto;
   grid-gap: 30px;
}

.footVert2 img {
  width: 10vw;
  margin-top: -0vw;
}

ul a.router-link-exact-active.router-link-active {
  border-top: 1px solid white;
  transition: 0.3s;
}
a {
  display: inline-block;
  position: relative;
}

a::after {
  content: "";
  width: 0;
  height: 0.5px;
  position: absolute;
  transition: all 0.2s linear;
  background: #ffffff;
  left: 0;
  bottom: 0;
  transition-delay: 0.2s;
}
a:hover::after {
  width: 100%;
  transition-delay: 0s;
}
.footVert3 {
  border-top: 1px solid white;
  /* border: 2px solid yellow; */
   grid-gap: 2px;
 
}


.footVert3 img {
  width: 1.5vw;
  padding-left: 0.5vw;
  /* margin-bottom: -0.5vw; */
}
.createdBy {
  /* border: 2px solid blue; */
  float: right;
  margin-left: auto;
}

.endTitle {
  border-top: 1px solid white;
  display: flex;
 padding-left: 50px;
 padding-right: 50px;
}
.footerIcones {
  display: grid;
  grid-template-columns: auto auto auto;
}



</style>