<template>
  <div class="Head">
    <div class="navbarContainer">
      <div class="first_line">
        <div class="first_line_inside">
          <div>
            <languageSwitcher />
          </div>
          <HeaderNavItems :isInput="true" :class="`first_line_right`" />
        </div>
      </div>
      <div class="Second_line">
        <div class="second-line-content">
          <div class="photo_side">
            <router-link to="/" exact
              ><img
                class="logo"
                src="../../assets/img/logoWhite.png"
                style="border: none"
            /></router-link>
            <div class="responsive-navbar">
              <button class="button">
                <img src="../../assets/icons/burger31.png" alt="" />
              </button>
            </div>
          </div>

          <ul class="navLinks">
            <HeaderNavItems :isInput="false" :class="`hide_links`" />
            <li class="aboutUs">
              <div>
                <ul class="menu">
                  <li
                    @click="listOne = !listOne"
                    @mouseover="listOne = true"
                    @mouseleave="listOne = false"
                  >
                    <p>
                      {{ $t("about_us") }}
                    </p>
                    <transition name=":fade">
                      <ul class="dropItems" v-if="listOne">
                        <li v-on:click="closeNavbar()">
                          <router-link to="/team" exact>
                            {{ $t("team") }}</router-link
                          >
                        </li>
                        <li v-on:click="closeNavbar()">
                          <router-link to="/history" exact>
                            {{ $t("history") }}</router-link
                          >
                        </li>
                        <li v-on:click="closeNavbar()">
                          <router-link to="/values" exact>
                            {{ $t("values") }}</router-link
                          >
                        </li>
                        <li v-on:click="closeNavbar()">
                          <router-link to="/company" exact>
                            {{ $t("company") }}</router-link
                          >
                        </li>
                      </ul>
                    </transition>
                  </li>
                </ul>
              </div>
            </li>

            <li class="aboutUs">
              <div>
                <ul class="menu">
                  <li
                    class="secondDrop"
                    @mouseover="listTwo = true"
                    @mouseleave="listTwo = false"
                    @click="listTwo = !listTwo"
                  >
                    <p>{{ $t("partners") }}</p>
                    <transition>
                      <ul class="dropItems" v-if="listTwo">
                        <li v-on:click="closeNavbar()">
                          <router-link to="/local" exact>
                            {{ $t("local_partners") }}</router-link
                          >
                        </li>
                        <li v-on:click="closeNavbar()">
                          <router-link to="/Foreign" exact>
                            {{ $t("foreign_partners") }}</router-link
                          >
                        </li>
                      </ul>
                    </transition>
                  </li>
                </ul>
              </div>
            </li>
            <li v-on:click="closeNavbar()" class="aboutUs">
              <router-link to="/exclusiveMedicaments" exact>
                {{ $t("exclusive") }}</router-link
              >
              <!-- <div>
                <ul class="menu">
                  <li
                    @click="listThree = !listThree"
                    @mouseover="listThree = true"
                    @mouseleave="listThree = false"
                  >
                    <p>{{ $t("exclusive") }}</p>
                    <transition>
                      <ul class="dropItems" v-if="listThree">
                        <li>
                          <router-link to="/exclusive" exact="">
                            {{ $t("exclusive_brands") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/exclusiveMedicaments">
                            {{ $t("exclusiveMedicaments") }}
                          </router-link>
                        </li>
                      </ul>
                    </transition>
                  </li>
                </ul>
              </div> -->
            </li>

            <li>
              <router-link to="/news" exact> {{ $t("news") }}</router-link>
            </li>
            <li>
              <router-link to="/blog" exact> {{ $t("blog") }}</router-link>
            </li>
            <li>
              <router-link to="/contact" exact>
                {{ $t("contact") }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageSwitcher from "../LanguageSwitcher/LanguageSwitcher.vue";
import HeaderNavItems from "./HeaderNavItems.vue";
export default {
  name: "NavbarContent",
  components: {
    languageSwitcher,
    HeaderNavItems,
  },
  data() {
    return {
      listOne: false,
      listTwo: false,
      listThree: false,
    };
  },
  mounted() {
    this.showNavBar();
  },
  methods: {
    showNavBar() {
      const toggleButton = document.getElementsByClassName("button")[0];
      const navbarLinks = document.getElementsByClassName("navLinks")[0];
      const rootBody = document.querySelector("body");
      toggleButton.addEventListener("click", () => {
        rootBody.classList.toggle("stop-scrolling");
        navbarLinks.classList.toggle("activeNav");
      });
    },
    closeNavbar() {
      const navbarLinks = document.getElementsByClassName("navLinks")[0];
      navbarLinks.classList.remove("activeNav");
    },
  },
};
</script>

<style scoped>
.Head {
  z-index: 99999999999;
  position: fixed;
  margin: 0;
  background-color: #7f5496;
  grid-column: 1/3;
  top: 0;
  left: 0;
  width: 100%;
  color: #e6e6e6;
  font-size: 16px !important;
}
.hide_links {
  text-align: center;
  display: none;
}
.hide_links li {
  border: 2px solid yellow;
  padding-top: 17px;
}
.navLinks {
  transition: 0.3s;
  align-items: center;
  display: flex;
  gap: 25px;
}

ul {
  list-style-type: none;
}

li a {
  padding: 10px 10px 6px 10px;
  text-decoration: none;
  background-color: transparent;
}

.dropItems {
  border-top: 1px solid #e8b1ff;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 15px -3px,
    rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
  margin: 10px 0 0 5px !important;
  background: #7f5496;
  border-radius: 5px;
}
/* .dropItems li {
  padding-left: 3px;
  padding-right: 3px;
} */

/*drop down   */

.aboutUs svg {
  margin-left: 2px;
}
.aboutUs p {
  padding: 5px 5px 1px 5px;
}
.navLinks {
  padding: 0px !important;
}
.navLinks.activeNav {
  display: flex;
  transition: all 0.6s ease-out;
}

/*drop down   */

.first_line {
  background-color: #e6e6e6;
  display: flex;
}

.first_line_inside a {
  color: #3b174e;
  font-size: 13px !important;
}
::v-deep.language span {
  font-size: 15px;
}

.first_line_inside {
  padding: 15px 0 15px 0;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbarContainer ul .router-link-active {
  color: #e8b1ff;
  font-weight: bold;
  transition: 0.4s;
}

.photo_side a::after {
  background: none;
}

a {
  /* text-align: center; */
  position: relative;
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

.menu .dropItems a:hover,
a:hover,
.menu p:hover {
  color: #e8b1ff;
}
.menu {
  /* border: 2px solid yellow; */
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
a:hover::after {
  width: 100%;
}

.Second_line {
  padding: 10px 0 10px 0;
  width: 100%;
  max-width: 1400px;
  margin: auto;
}
.second-line-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid blue; */
}

.first_line li a {
  font-size: 17px;
}
.photo_side {
  display: flex !important;
  align-items: center !important;
}
.photo_side img {
  width: 200px;
}

input[type="text"]:focus {
  outline: none;
}

.responsive-navbar {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid pink; */
}
.responsive-navbar li {
  border: 2px solid green;
}

.responsive-navbar img {
  text-align: center;
  width: 100%;
  height: auto;
}
.responsive-navbar button {
  cursor: pointer;
  background: none;
  border: none;
}
.responsive-navbar svg {
  z-index: 999;
}

/* drop vue */
.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  /* cursor: pointer; */
}

.menu a {
  /* border: 2px solid red; */
  display: block;
  text-align: start;
  color: #e6e6e6;
  text-decoration: none;
  /* margin-right: 2px; */
}

.menu li {
  display: block;
  position: relative;
  color: #e6e6e6;
  padding-bottom: 2px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 25px;
  margin: 0;
  padding: 0;
  margin-right: 20vw;
  /* background: #7F5496; */
  /* border-bottom-right-radius:10px; */
  /* border-top-left-radius:10px; */
  margin-right: -20px;
}

.menu li ul li {
  transition: 0.2s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* drop vue */

@media all and (max-width: 1500px) {
  .first_line_inside,
  .Second_line {
    padding: 10px 40px 10px 40px;
  }
}

@media screen and (max-width: 1063px) {
  .responsive-navbar {
    transition: 0.3s;
    display: flex;
    margin-left: auto !important;
    margin-right: 0 !important;
  }

  .dropItems {
    min-width: 100vw;
  }
  .navLinks.activeNav {
    font-size: 18px;
  }

  .dropItems {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 15px -3px,
      rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
    margin-left: 30px !important;
    margin-right: 30px !important;
    /* border: 2px solid red; */
    background: #543864;
    box-shadow: 0px 1px 3px #e3bff256, 0px -1px 3px #e3bff256;
  }

  .menu li ul {
    position: relative;
    margin-top: -30px !important;
    margin-bottom: 20px !important;
    top: 35px;
  }

  .menu li ul li {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .second-line-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .navLinks {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
  .navLinks a {
    padding: 0px !important;
  }

  .photo_side {
    width: 100%;
    margin: 5px 0px;
  }

  a:hover {
    border-radius: inherit;
    box-shadow: none;
    color: #e8b1ff;
  }
  .hide_links {
    display: block;
  }
  .first_line_right a {
    display: none;
  }
  .first_line_right ul {
    gap: inherit;
  }

  .first_line_right li {
    display: block;
  }
  .menu a {
    text-align: center;
  }

  .menu {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
}

@media all and (max-width: 526px) {
  .first_line_inside,
  .Second_line {
    padding: 10px 30px;
  }

  /* .photo_side .logo {
    width: 150px;
  } */
}

@media all and (max-width: 358px) {
  .photo_side .logo {
    width: 130px;
  }
}
</style>