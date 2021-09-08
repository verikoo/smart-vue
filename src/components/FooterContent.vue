<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="footerGrid">
        <div class="navLinks">
          <div class="resFold">
            <p>გაეცანით</p>
          </div>
          <div class="navLinksGrid">
            <div>
              <ul>
                <li><router-link to="/" exact>მთავარი</router-link></li>
                <li><router-link to="/career" exact>კარიერა</router-link></li>
                <li><router-link to="/csr" exact>მხარდაჭერა</router-link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><router-link to="/history" exact>ისტორია</router-link></li>
                <li><router-link to="/team" exact>გუნდი</router-link></li>
                <li>
                  <router-link to="/exclusive" exact
                    >ექსკლუზიური <br />
                    ბრენდები</router-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li><router-link to="/news" exact>სიახლე</router-link></li>
                <li><router-link to="/blog" exact>ბლოგი</router-link></li>
                <li><router-link to="/contact" exact>კონტაქტი</router-link></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footerLogo">
          <img src="../../public/assets/logo.png" alt="" />
        </div>
        <div class="footerSocial">
          <div>
            <p>დაგვიკავშირდით</p>
          </div>
          <div class="footerSocialLinks">
            <div>
              <ul>
                <li>
                  <img src="../../public/assets/icons/facebook.png" alt="" />
                  facebook
                </li>
                <li>
                  <img src="../../public/assets/icons/twitter.png" alt="" />
                  twitter
                </li>
                <li>
                  <img src="../../public/assets/icons/location.png" alt="" />
                  ფარნავაზის 66
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <img src="../../public/assets/icons/facebook.png" alt="" />
                  facebook
                </li>
                <li>
                  <img src="../../public/assets/icons/whatsapp.png" alt="" />
                  whatsapp
                </li>
                <li>
                  <img src="../../public/assets/icons/call-back.png" alt="" />
                  +995 555 55 55 55
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div class="createdByFooter">
        <div>
          <p>2021 &#169; ყველა უფლება დაცულია</p>
        </div>
        <div>
          <p>შექმნილია Cyber Solutions-ის მიერ</p>
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
  background-color: #591a92;
  color: white;

  /* justify-content: center !important;
  margin: auto; */
  font-size: 15px !important;
}

.footerContainer {
  max-width: 1920px;
  margin: 0 30px 0 30px;
  margin: auto;
}

.footerGrid {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
}

.footerGrid ul {
  list-style-type: none;
}


.footerLogo {
  display: flex;
  align-items: center;
}
.footerLogo img {
  text-align: center;
  width: 100%;
  height: auto;
}
.navLinks {
  display: flex;
  display: inline-block;
  padding: 0 !important;
}
.navLinks p {
  display: flex;
  justify-content: center;
}
.navLinksGrid {
  display: flex;
  border-top: 1px solid rgb(255, 255, 255);
}
.navLinksGrid ul {
  text-align: left;
  justify-content: start;
  padding: 15px !important;
}

.navLinksGrid li a {
  padding: 4px;
}

.footerSocial ul {
  padding: 20px !important;
}
.footerSocialLinks {
  display: flex;
  border-top: 1px solid white;
}

.footerSocial p {
  display: flex;
  justify-content: center;
}

.footerSocialLinks img {
  width: 20px;
}
.createdByFooter {
  display: flex;
  padding: 0 10px 0 10px !important;
  justify-content: space-between;
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
  border-top: 1px solid white;
  transition: 0.3s;
}
a {
  display: inline-block;
  position: relative;
}


a:hover {
  color: #fff;
  border-radius: 20px;
  box-shadow: #ffffff40 0px 2px 1px, #ffffff40 0px 4px 2px,
    #ffffff40 0px 0px 4px, #ffffff40 0px 0px 8px, #ffffff40 0px 2px 16px;
}
a:hover::after {
  width: 100%;
  transition-delay: 0s;
}

@media only screen and (max-width: 992px) {
  .footerGrid,
  .createdByFooter {
    display: grid !important;
    grid-template-columns: auto !important;
    justify-content: space-around;
  }
  .footerLogo {
    width: 50%;
    margin: auto;
  }
}

@media only screen and (max-width: 360px) {
  .navLinksGrid {
    display: grid;
    grid-template-columns: auto;
    justify-content: space-around;
  }
  .navLinksGrid ul {
    text-align: center;
    padding: 0px !important;
  }
  .navLinksGrid .footerSocialLinks {
    display: grid;
    grid-template-columns: auto;
  }

  .footerSocialLinks ul {
    padding: 0px !important;
  }
}
</style>