<template>
  <div class="Head" >
         <div class="navbarContainer">
          <div class="first_line">
            <div>
              <li><router-link to="/">KA</router-link></li>
            </div>
            <div class="first_line_right">
              <ul>
                <li><router-link to="/" exact>მთავარი</router-link></li>
                <li><router-link to="/csr" exact>csr</router-link></li>
                <li><router-link to="/career" exact>კარიერა</router-link></li>
              </ul>
            </div>
          </div>
          <div class="Second_line">
            <div class="second-line-content">
              <div class="photo_side">
                <img src="../../../../public/assets/eschool.png" />
              </div>
              <ul class="navLinks">
                <li class="aboutUs">
                  <a class="navbarDropdown"> ჩვენს შესახებ 
                    <!-- <i style="font-size: 30px; color: white;" class="fa fa-caret-down"></i> -->
                  </a>

                  <ul class="dropdownMenu">
                    <li><router-link to="/team" exact>გუნდი</router-link></li>
                    <li>
                      <router-link to="/history" exact>ისტორია</router-link>
                    </li>
                    <li>
                      <router-link to="/values" exact>ღირებულებები</router-link>
                    </li>
                    <li>
                      <router-link to="/company" exact
                        >კომოპანია-მისია</router-link
                      >
                    </li>
                  </ul>
                </li>                  

                <li><router-link to="/contact" exact>კონტაქტი</router-link></li>

                <li>
                  <router-link to="/partners" exact>პარტნიორები</router-link>
                </li>
                <li><router-link to="/news" exact>სიახლე</router-link></li>
                <li><router-link to="/blog" exact>ბლოგი</router-link></li>
                <li><input type="text" placeholder="Search.."></li>
              </ul>
              <div class="responsive-navbar">
                
              </div>
            </div>
          </div>
         </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarContent',
}
</script>

<style scoped>
.Head {
  margin: 0;
  background-color: #591a92;
  grid-column: 1/3;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
}
.navbarContainer{
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
 
}

.navLinks {
  /* border: 2px solid red; */
  align-items: center;
  display: flex;
  gap: 20px;
}

.navLinks li a {
  padding: 10px;
  font-size: 18px;
}

ul {
  list-style-type: none;
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

/*drop down   */
.aboutUs {
  float: left;
  overflow: hidden;
}

.aboutUs .navbarDropdown {
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  /* padding: 10px; */
  /* width: 150px; */
  display: flex;
}

.dropdownMenu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.navLink {
  font-size: 18px;
  color: red;
}

.dropdownMenu a {
  float: none;
  color: black;
  padding: 14px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.aboutUs:hover .dropdownMenu {
  display: block;
}

.dropdownMenu .navbarDropdown {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.navLinks {
  padding: 0px !important;
}

/*drop down   */

.first_line {
  padding: 5px 15px;
  height: 1.7vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(196, 159, 206, 0.35) 0px -2px 6px 0px inset;
}
.first_line li{
  list-style-type: none;
}


.first_line_right ul{
  display:flex; gap: 10px !important;
  margin:0;
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

.Second_line {
  padding: 0 15px;
}
.second-line-content {
  display: flex; 
  justify-content: space-between;
}
.Second_line ul {
  padding: 10px;
}
.first_line li {
  font-size: 16px;
  /* border: solid 1px red; */
}
.photo_side {
  display: flex !important; 
  align-items: center !important;
}

.photo_side img {
  width: 60px;
  object-fit: cover;
}

/* search form */
.second-line-content input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
/* search form */


/* Responsive navbar */
.responsive-navbar {
  display: none;
}

.responsive-navbar svg {
  z-index: 999;
  border: solid 1px red;
}


@media screen and (max-width: 800px) {
  .navLinks {
    display: none;
  }
  .photo_side {
    margin: 5px 0px
  }
  .responsive-navbar {
    display: block;
  }
}

</style>