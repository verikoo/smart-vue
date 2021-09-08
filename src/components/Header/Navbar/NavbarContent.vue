<template>
  <div class="Head">
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
          <div class="responsive-navbar">
            <button class="button" style="background: none; border: none">
              <img src="../../../../public/assets/icons/burger32.png" alt="" />
            </button>
          </div>
          <ul class="navLinks">
            <li class="aboutUs">
              <a class="navbarDropdown">
                ჩვენს შესახებ
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
                  <router-link to="/company" exact>კომოპანია-მისია</router-link>
                </li>
              </ul>
            </li>
            <li class="aboutUs">
              <a class="navbarDropdown">
                პარტნიორები
                <!-- <i style="font-size: 30px; color: white;" class="fa fa-caret-down"></i> -->
              </a>

              <ul class="dropdownMenu">
                <li>
                  <router-link to="/local" exact
                    >ადგილობრივი პარტნიორები</router-link
                  >
                </li>
                <li>
                  <router-link to="/ForeignPartners" exact
                    >უცხოელი პარტნიორები</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/exclusive"> ექსკლუზიური ბრენდები</router-link>
            </li>
            <li><router-link to="/news" exact>სიახლე</router-link></li>
            <li><router-link to="/blog" exact>ბლოგი</router-link></li>
            <li><router-link to="/contact" exact>კონტაქტი</router-link></li>

            <li><input type="text" placeholder="Search.." /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarContent",
  mounted() {
    this.showNavBar();
  },
  methods: {
    showNavBar() {
      const toggleButton = document.getElementsByClassName("button")[0];
      const navbarLinks = document.getElementsByClassName("navLinks")[0];

      toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("activeNav");
      });
    },
  },
};
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
  font-size: 16px !important;
}
.navbarContainer {
  /* width: 100%; */
  max-width: 1920px;
  margin: 0 30px 0 30px;
  margin: 0 auto;
  /* border: 2px solid red; */
}

.navLinks {
  /* border: 2px solid red; */
  align-items: center;
  display: flex;
  gap: 20px;
}

.navLinks li a {
  padding: 10px;
  font-size: 15px;
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
  background-color: #591a92;
  color: teal !important;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownMenu a {
  float: none;
  color: white;
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

.navLinks.activeNav {
  display: flex;
}

/*drop down   */

.first_line {
  padding: 5px 15px;
  /* height: 1.7vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(196, 159, 206, 0.35) 0px -2px 6px 0px inset;
}
.first_line li {
  list-style-type: none;
  font-size: 12px !important;
}

.first_line_right ul {
  display: flex;
  gap: 10px !important;
  margin: 0;
}

ul .router-link-active {
  /* box-shadow: rgba(255, 255, 255, 0.25) 0px 2px 1px, rgba(255, 255, 255, 0.25) 0px 4px 2px, rgba(255, 255, 255, 0.25) 0px 0px 4px, rgba(255, 255, 255, 0.25) 0px 0px 8px, rgba(255, 255, 255, 0.25) 0px 2px 16px; */
  color: #ffffff;
  transition: 0.4s;
  border-top: 1px solid white;
}
a {
  display: inline-block;
  position: relative;
}

/* a::after {
  content: "";
  width: 0;
  height: 0.5px;
  position: absolute;
  transition: all 0.2s ;
  background: #ffffff;
  left: 0;
  bottom: 0;
  transition-delay: 0.1s ease all; 
}*/
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
a {
  transition: 0.5s;
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
}
.photo_side {
  display: flex !important;
  align-items: center !important;
}

.photo_side img {
  width: 60px;
  object-fit: cover;
}

.second-line-content input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  width: 80%;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

input[type="text"]:focus {
  outline: none;
}

.responsive-navbar {
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.responsive-navbar img {
  text-align: center;
  width: 100%;
  height: auto;
}

.responsive-navbar svg {
  z-index: 999;
}

@media screen and (max-width: 800px) {
  .responsive-navbar {
    display: flex;
  }

  .second-line-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .navLinks {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  .navLinks a {
    padding: 0px !important;
  }

  .photo_side {
    margin: 5px 0px;
  }

  a:hover {
  
    border-radius: inherit ;
    box-shadow:none;
  }

  ul .router-link-active {
  transition: 0.4s;
  border-top: 1px solid white;
}
}
</style>